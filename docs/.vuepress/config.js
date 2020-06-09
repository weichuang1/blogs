const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')


module.exports = {
  title: "stay true to the mission",
  description: '保持热爱，奔赴山海',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    huawei:false,
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/img/z.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
      // 自动形成侧边导航
      sidebarDepth: 1,
      displayAllHeaders: false,
    nav,
    sidebar,
     // 最后更新时间
     lastUpdated: 'Last Updated',
     // 作者
     author: 'weicker',
     authorAvatar: '/timg.gif',
      //评论
    valineConfig: {
      appId: 'JUwQdTF5snyGg9Ewqd3vcA3h-gzGzoHsz',
      appKey: 'YfbxsYfirElxPLpCrfuXnfFN',
      placeholder: '填写邮箱可以收到回复哦!',
      notify: true, // 邮件提醒
      verify: true, // 验证码
      recordIP: true

    },
  },
  plugins,
  markdown: {
    lineNumbers: true
  },
}