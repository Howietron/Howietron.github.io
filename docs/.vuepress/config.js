const head = require('./config/themeConfig/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Howietron",
  description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
  base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head,
  plugins,
  themeConfig,

}