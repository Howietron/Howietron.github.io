// const nav = require('./themeConfig/nav.js');
// const htmlModules = require('./htmlModules.js');
// const sidebar = require('./themeConfig/sidebar.js');
// const { readFileList, readTotalFileWords, readEachFileWords } = require('../webSiteInfo/readFile.js');

// import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
// import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
// import dayjs from 'dayjs'
// import baiduCode from './config/baiduCode' // 百度统计hm码
// const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const nav = require('./themeConfig/nav.js');
const htmlModules = require('./htmlModules.js');

// 主题配置
module.exports = {
  // 导航配置
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'Howietron/Howietron.github.io', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

  // category: false, // 是否打开分类功能，默认true
  // tag: false, // 是否打开标签功能，默认true
  // archive: false, // 是否打开归档功能，默认true
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  bodyBgImg: [
    // 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    // 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    // 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: false, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  sidebar: 'structuring',

  // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
  author: {
    name: 'Howietron', // 必需
    link: 'https://github.com/Howietron', // 可选的
  },

  // 博主信息 (显示在首页侧边栏)
  blogger: {
    avatar: 'https://cdn.jsdelivr.net/gh/Howietron/Howietron/img/202306031748859.gif',
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

  // 插入hmtl(广告)模块
  htmlModules
}


