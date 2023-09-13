
// import LastReadingPopup from './components/LastReadingPopup.vue'
// let busuanzi;

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  /**
   * 百度 pv 统计，不使用的可以去掉或注释掉
   */
  // router.beforeEach((to, from, next) => {
  //   // 路由切换，触发百度的 pv 统计
  //   if (typeof _hmt != "undefined") {
  //     if (to.path) {
  //       _hmt.push(["_trackPageview", to.path]);
  //     }
  //   }
  //   next();
  // })
  /**
   * 私密文章验证
   */
  if (!isServer) {
    // 如果开启了私密文章验证
    if (
      siteData.themeConfig.privatePage &&
      siteData.themeConfig.privatePage.openPrivate
    ) {
      router.beforeEach((to, from, next) => {
        try {
          let {
            username,
            password,
            loginPath,
            loginKey,
            loginSession,
            loginInfo,
            firstLogin,
            firstLoginKey,
          } = siteData.themeConfig.privatePage;
          !loginKey && (loginKey = "vdoing_manager"); // 默认为 vdoing_manager
          !firstLoginKey && (firstLoginKey = "vdoing_first_login"); // 默认为 vdoing_first_login
          // 网站关闭或者刷新后，清除登录状态
          if (loginSession) {
            window.addEventListener("unload", function () {
              localStorage.removeItem(loginKey);
              localStorage.removeItem(firstLoginKey);
            });
          }
          // 如果是登录页面，不需要验证
          if (loginPath == to.path || !loginPath) {
            throw new Error("无需验证");
          }
          // 尝试获取管理员曾经登录的用户信息
          let globalInfo = JSON.parse(localStorage.getItem(loginKey));
          // 管理员用户名密码验证
          if (
            globalInfo &&
            globalInfo.username == username &&
            globalInfo.password == password
          ) {
            // 存在曾经登录信息，如果登录状态过期
            if (new Date() - globalInfo.time > globalInfo.expire) {
              localStorage.removeItem(loginKey);
            } else {
              throw new Error("管理员验证成功！");
            }
          }
          // 整个网站进入前需要验证
          let isAgainLogin = true;
          if (parseInt(firstLogin) == 1 || parseInt(firstLogin) == 2) {
            parseInt(firstLogin) == 2 && (isAgainLogin = false);
            // 尝试获取第一次访问网站曾经登录的用户信息
            let firstLoginInfo = JSON.parse(
              localStorage.getItem(firstLoginKey)
            );
            !firstLoginInfo && jumpToLogin(loginPath, to.path, "first");
            if (firstLoginInfo) {
              // 先判断 loginInfo 是否存在，然后判断 loginInfo 是否对象，最后判断 loginInfo 是否有 firstLoginKey
              if (loginInfo && loginInfo.hasOwnProperty(firstLoginKey)) {
                // 进行 loginInfo 验证
                checkLoginInfo(loginInfo[firstLoginKey], firstLoginInfo) &&
                  jumpToLogin(loginPath, to.path, "first");
              } else {
                jumpToLogin(loginPath, to.path, "first");
              }
            }
          }
          if (to.path == "/") {
            throw new Error("首页不需要验证！");
          }
          // 如果 firstLogin 不等于 2
          if (isAgainLogin) {
            siteData.pages.forEach((item) => {
              // 找出带有 private 的文章
              if (item.path == to.path) {
                if (
                  item.frontmatter.private &&
                  item.frontmatter.private == true
                ) {
                  // 网站关闭或者刷新后，清除登录状态
                  if (loginSession) {
                    window.addEventListener("unload", function () {
                      localStorage.removeItem(item.frontmatter.permalink);
                    });
                  }
                  // 尝试获取该私密文章曾经登录的用户信息
                  let singleInfo = JSON.parse(
                    localStorage.getItem(item.frontmatter.permalink)
                  );
                  // 都不存在登录信息
                  !singleInfo &&
                    jumpToLogin(
                      loginPath,
                      to.path,
                      item.frontmatter.loginInfo ||
                        item.frontmatter.username ||
                        item.frontmatter.password ||
                        item.frontmatter.expire
                        ? "single"
                        : "all"
                    );

                  // 单个文章私密验证
                  if (
                    (item.frontmatter.username && item.frontmatter.password) ||
                    item.frontmatter.loginInfo
                  ) {
                    // 不存在登录信息，则跳转到登录页面
                    !singleInfo && jumpToLogin(loginPath, to.path, "single");
                    // 存在曾经登录信息，如果登录状态过期
                    if (new Date() - singleInfo.time > singleInfo.expire) {
                      localStorage.removeItem(item.frontmatter.permalink);
                      jumpToLogin(loginPath, to.path, "single");
                    }
                    // 是否需要登录
                    let isLogin = true;
                    // 对 loginInfo 进行验证
                    if (Array.isArray(item.frontmatter.loginInfo)) {
                      isLogin = checkLoginInfo(
                        item.frontmatter.loginInfo,
                        singleInfo
                      );
                    }
                    // 如果 loginInfo 不存在，则进行单文章的用户名密码验证
                    if (
                      isLogin &&
                      singleInfo.username !== item.frontmatter.username &&
                      singleInfo.password !== item.frontmatter.password
                    ) {
                      jumpToLogin(loginPath, to.path, "single");
                    }
                  } else {
                    // 全局私密验证
                    let isLogin = true;
                    // 先判断 loginInfo 是否存在，然后判断 loginInfo 是否对象，最后判断 loginInfo 是否有该文章的 permalink
                    if (loginInfo && loginInfo.hasOwnProperty(to.path)) {
                      isLogin = checkLoginInfo(loginInfo[to.path], singleInfo);
                    }
                    // 如果 loginInfo 验证失败
                    isLogin && jumpToLogin(loginPath, to.path, "all");
                  }
                }
              }
            });
          }
        } catch (e) {}
        next();
      });
    }
  }
  /**
   * 检查 loginInfo 里的用户名和密码，userInfo 为曾经登录的信息
   * 匹配成功返回 false，失败返回 true
   */
  function checkLoginInfo(loginInfo, userInfo) {
    try {
      loginInfo.forEach((info) => {
        if (
          userInfo.username == info.username &&
          userInfo.password == info.password
        ) {
          // 利用异常机制跳出 forEach 循环，break、return、continue 不会起作用
          throw new Error();
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  }
  /**
   * 跳转到登录页面
   * loginPath：登录页面的 permalink
   * toPath：当前页面的 permalink，verifyMode：验证方式
   */
  function jumpToLogin(loginPath, toPath, verifyMode) {
    router.push({
      path: loginPath,
      query: {
        toPath: toPath,
        verifyMode: verifyMode, // 单个文章验证（single）或全局验证（all）或网站验证（first）
      },
    });
    throw new Error("请先登录！");
  }

  /**
   * 记录最后一次阅读位置模块，方便下次直接跳转
   * 目前不使用该插件
   */
  // 判断是否绑定时间是否绑定成功
  // let isMounted = false;
  // // 最后一次阅读位置跳转
  // Vue.component(LastReadingPopup.name, LastReadingPopup);
  // Vue.mixin({
  //   // 有多少个 Vue 组件（md 文档），就执行多少次 mounted()，所以利用 if 判断只允许执行一次
  //   mounted() {
  //     if (!isMounted) {
  //       window.addEventListener('unload', this.saveLastReading);  // 卸载窗口前，将数据存储，方便下次可以直接跳转位置
  //       isMounted = true;
  //     }
  //   },
  //   methods: {
  //     saveLastReading() {
  //       localStorage.setItem('lastReading', JSON.stringify({
  //         path: this.$route.path,
  //         scrollTop: document.documentElement.scrollTop,
  //         timestamp: new Date().getTime(),
  //       }))
  //     }
  //   }
  // });
};
