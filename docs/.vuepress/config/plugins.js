// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://wiki.howie.top',
  count: 5000,
};

const autometa_options = {
  site: {
    name: 'Howietron',
  },
  canonical_base: 'https://wiki.howie.top',
};

// 插件配置
module.exports = [
  // 百度自动推送
  'vuepress-plugin-baidu-autopush',
  // 鼠标点击后散开小星星
  'cursor-effects',
  // 全文搜索插件
  // 'fulltext-search',
  // 全文搜索插件 meilisearch
  // [
  //   'vuepress-plugin-meilisearch',
  //     {
  //         hostUrl: 'https://ms-cea9697b10ca-1961.sgp.meilisearch.io',        // 该 URL 应该能在用户的浏览器上被访问，不能为 localhost
  //         apiKey: "899b4f028209df3541c1dd0cd8c0fdd5a7eae31d63580678be233da5bc50e273",
  //         indexUid: 'wiki',
  //         // placeholder: 'Search as you type...',   // 在搜索栏中显示的占位符
  //         maxSuggestions: 6,                      // 最多显示几个搜索结果
  //         cropLength: 30,                         // 每个搜索结果最多显示多少个字符
  //     },
  // ],
  //  可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
   [
    'thirdparty-search',
    {
      thirdparty: [
        {
          title: '在谷歌中搜索',
          frontUrl: 'https://www.google.com/search?q=',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '在百度中搜索',
          frontUrl: 'https://www.baidu.com/s?wd=',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: `https://www.baidu.com/s?wd=site%3Awiki.howie.top%20`,
        },
      ],
    }
  ],
  // 阅读顶部进度条
  'reading-progress',

  // 自定义插件
  [
    {
      name: 'custom-plugins',
        globalUIComponents: ["PageInfo","BlockToggle","GlobalTip"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
  [
    "dynamic-title",
    {
      showIcon:
        "https://wiki.howie.net/img/logo.png",
      showText: "ヾ(≧▽≦*)o欢迎回来！",
      hideIcon:
        "https://wiki.howie.net/img/logo.png",
      hideText: "ಥ_ಥ不要走呀！",
      recoverTime: 2000, //  持续时间
    },
  ],

  // rss 配置
  [ 'feed', feed_options ],

  // meta优化 https://github.com/webmasterish/vuepress-plugin-autometa
  ['autometa',autometa_options],

  // 代码块复制按钮
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 🎉', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],

  // 代码块儿演示
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],

  // 放大图片
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],

  // 百度统计
  [
    'vuepress-plugin-baidu-tongji',
    {
      hm: '7191779d01b9f1faaf83f1bc9eb4ff4b',
    },
  ],

  // 提供mermaid图表支持
  'vuepress-plugin-mermaidjs',
  [
    'sitemap', {
      hostname: 'https://wiki.howie.top',
      exclude: ["/404.html"],
    },
  ],


  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: 'e5389430e0e3bd8919cf',
        clientSecret: '2300e8944ad5e63878de368d33385acc4692ffd2',
        repo: 'Howietron.github.io', // GitHub 仓库
        owner: 'Howietron', // GitHub仓库所有者
        admin: ['Howietron'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],

  // 站点地图
  'robots', {
    host: "https://wiki.howie.top",
    disallowAll: false,
    allowAll: true,
    sitemap: "/sitemap.xml",
  },

  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ]

]
