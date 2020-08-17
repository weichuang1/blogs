//侧边栏
module.exports = {
  '/views/': [
    '',
    {
      title: '算法',
      collapsable: true,
      children: [
        '算法/广度和深度遍历',
        '算法/排序算法'
      ]
    },
    {
      title: 'webpack',
      collapsable: true,
      children: [
        'webpack/安装',
        'webpack/模块化',
        'webpack/loader',
        'webpack/package-lock.json',
        'webpack/plugins',
        'webpack/sourcemap',
        'webpack/webpack配置文件'
      ]
    },
    {
      title: '面试题',
      collapsable: true,
      children: [
        'programming/闭包',
        'programming/防抖节流',
        'programming/观察者模式',
        'programming/柯里化',
        'programming/类型判断',
        'programming/两任务并行',
        'programming/深浅拷贝',
        'programming/实现一个sleep函数',
        'programming/实现flatten函数',
        'programming/使用Promise封装一个AJAX',
        'programming/手写Promise',
        'programming/以下代码输出值',
        'programming/异步编程',
        'programming/bind、apply实现',
        'programming/compose',
        'programming/name的值是多少',
        'programming/PromiseAll',
        'programming/this指向',
        'programming/reduce实现map'

      ]
    },
    {
      title: 'node.js',
      collapsable: true,
      children: [
        'node/node',
        'node/npm',
        'node/核心模块',
        'node/模块机制'

      ]
    },
    {
      title: '网络',
      collapsable: true,
      children: [
        '网络/UDP',
        '网络/TCP',
        '网络/HTTP',
        '网络/HTTPS',
        '网络/从输入URL到页面加载完成的过程',
        '网络/缓存',
        '网络/跨域',
        '网络/Ajax',
        '网络/CDN',
        '网络/cookie和session',
        '网络/RESTful',
        '网络/nginx',
        '网络/登陆跳转'
      ]
    },
    {
      title: 'git',
      collapsable: true,
      children: [
        'git/git1',
        'git/git'
      ]
    },
    {
      title: 'HTML5',
      collapsable: true,
      children: [
        'html5/html',
        'html5/HTML5的语义元素',
        'html5/HTML5多媒体标签',
        'html5/HTML5表单元素',
        'html5/HTML5中的API',
        'html5/Canvas'
      ]
    },
    {
      title: 'CSS',
      collapsable: true,
      children: [
        'css/动画',
        'css/居中',
        'css/css选择器',
        'css/css',
        'css/其他题目'
      ]
    },
    {
      title: 'JS',
      collapsable: true,
      children: [
        'js/ES6',
        'js/this',
        'js/DOM',
        'js/BOM',
        'js/事件队列',
        'js/正则',
        'js/作用域',
        'js/原型链与继承',
        'js/js数据类型',
        'js/js对象',
        'js/js继承'
      ]
    },
    {
      title: 'Vue.js',
      collapsable: true,
      children: [
        'Vue/Vue基础笔记',
        'Vue/Vue组件'
      ]
    }

  ]
}