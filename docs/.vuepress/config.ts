/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const DOMAIN_NAME = 'wiki.howie.top' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Howietron",
      description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
          {
            text: '前端',
            link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
            items: [
              // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
              {
                text: 'HTML&CSS',
                items: [
                  {text: 'HTML基础', link: '/pages/0f90d5/'},
                  {text: 'CSS基础', link: '/pages/bc9ae0/'},
                  {text: 'CSS进阶', link: '/pages/82afa9/'},
                  {text: 'HTML5+CSS3', link: '/pages/bc6919/'}
                ],
              },
              {
                text: 'JavaScript',
                link: '/pages/9043f0/',
              },
              {
                text: '前端笔记',
                items: [
                  { text: '《JavaScript教程》', link: '/javascript/' },
                  { text: '《ES6 教程》', link: '/es6/' },
                  { text: '《Vue》', link: '/vue/' },
                  { text: '《React》', link: '/react/' },
                  { text: '《TypeScript 从零实现 axios》', link: '/typescript-axios/' },
                  { text: '《Git》', link: '/git/' }
                ],
              },
            ],
          },
          {
            text: '后端',
            link: '/server/',
            items: [
              { text: 'Java核心基础', link: '/pages/0694db/' },
              { text: 'Java后端框架', link: '/pages/baf2c1/' },
              { text: '分布式中间件', link: '/pages/d860e2/' },
              { text: '微服务架构', link: '/pages/85ae20/' },
              { text: '算法和数据结构', link: '/pages/2724aa/' },
              { text: '底层必备源码', link: '/pages/659821/' },
            ],
          },
          {
            text: '运维',
            link: '/devops/',
            items: [
              { text: 'Linux学习', link: '/pages/f78d73/' },
              { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
              { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
              { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
              { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
            ],
          },
          {
            text: '更多',
            link: '/more/',
            items: [
              { text: '学习', link: '/pages/f2a556/' },
              { text: '面试', link: '/pages/aea6571b7a8bae86/' },
              { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
              { text: '实用技巧', link: '/pages/7e66b5/' },
              { text: '友情链接', link: '/friends/' },
            ],
          },
          { text: '关于', link: '/about/' },
          {
            text: '收藏',
            link: '/pages/beb6c0bd8a66cea6/',
            // items: [
            //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
            //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
            //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
            // ],
          },
          {
            text: '索引',
            link: '/archives/',
            items: [
              { text: '分类', link: '/categories/' },
              { text: '标签', link: '/tags/' },
              { text: '归档', link: '/archives/' },
            ],
          },
      // { text: '开往', link: 'https://travellings.link' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    // logo: '/img/logo.png', // 导航栏logo
    logo: 'https://oss.howie.top/img/2023/09/1320230913133821.png', // 导航栏logo
    repo: 'Howietron/Howietron.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    docsBranch: 'main', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // bodyBgImg: [
    //   'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Howietron', // 必需
      link: 'https://github.com/Howietron', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://oss.howie.top/img/202306031748859.gif',
      name: 'Howietron',
      slogan: '放平心态，偷偷厉害。',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:613872296@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Howietron',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo:
        '<a href="https://wiki.howie.top" target="_blank">Howietron</a> | <a href="https://beian.miit.gov.cn/#/" target="_blank">鲁ICP备18012116号</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Howietron',
        link: 'https://github.com/Howietron'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules,

    // 私密文章配置
    privatePage: {
      openPrivate: true, // 开启私密文章验证，默认开启（true），如果不开启（false），则下面配置都失效
      username: "youngkbt", // 管理员用户名
      password: "123456", // 管理员密码
      expire: "1d", // 登录过期时间：1d 代表 1 天，1h 代表 1 小时，仅支持这两个单位，不加单位代表秒。过期后访问私密文章重新输入用户名和密码。默认一天
      loginPath: "/vdoing/login/", // 引用登录组件的 md 文章的 permalink（必须），无默认值
      loginKey: "vdoing_manager", // 存储用户名信息的 key，默认是 vdoing_manager。系统通过该 key 验证是否登录、是否过期
      loginSession: false, // 开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false（不开启）
      firstLogin: 0, // 第一次进入网站需要验证。用于封锁整个网站，默认为 0（不开启），1 和 2 都代表开启，区别：1 代表虽然进入网站成功，但是网站内的私密文章仍需要单独验证，2 代表进入网站成功，网站内的私密文章不需要单独验证，也就是网站内的私密文章和普通文章一样可以访问
      firstLoginKey: "vdoing_first_login", // 存储用户名信息的 key，firstLogin 开启后该配置生效，默认为 vdoing_first_login，系统通过该 key 验证是否登录、是否过期
      // 私密文章多组用户名密码
      loginInfo: {
        "/pages/55bab3/": [
          { username: "linuxprobe", password: "0911" },
        ],
        "/pages/fbbe11/": [
          { username: "linuxprobe", password: "0911" },
        ],
        "vdoing_first_login" :[  // 对应 firstLoginKey 的值
          { username: "vdoing", password: "123456" },
        ]
      }
    },

  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '个人技术博客，前端、后端和运维相关,技术文档,学习,面试。。。',
      },
    ],
   // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3114978_qe0b39no76.css' }], // 阿里云在线矢量库,字数和访客数图标使用

    ['noscript', {}, '<meta http-equiv="refresh" content="0; url=https://www.youngkbt.cn/noscript/"><style>.theme-vdoing-content { display:none }'],  // 私密文章模块需要


    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          },
        ],
      }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: '8ebfe6fc8ccebe010b2a',
          clientSecret: 'c29add165eac1eee4c1110e4fce386a4d5e14c74',
          repo: 'Howietron.github.io', // GitHub 仓库
          owner: 'Howietron', // GitHub仓库所有者
          admin: ['Howietron'], // 对仓库有写权限的人
          distractionFreeMode: false,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],

    // 阅读顶部进度条
    'reading-progress',
    // 自定义插件
    [
      {
        name: 'custom-plugins',
          globalUIComponents: ["BlockToggle","GlobalTip"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
      }
    ],
    // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
    [
      "dynamic-title",
      {
        showIcon:
          "https://oss.howie.top/img/2023/09/1320230913133821.png",
        showText: "ヾ(≧▽≦*)o欢迎回来！",
        hideIcon:
          "https://oss.howie.top/img/2023/09/1320230913133821.png",
        hideText: "ಥ_ಥ不要走呀！",
        recoverTime: 2000, //  持续时间
      },
    ],

    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  


  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
