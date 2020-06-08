//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '知识晶体 Q&A',
            collapsable: true,
            children: [
                'qaq/sum_db_001',
                'qaq/sum_fe_001',
                'qaq/sum_fe_002'
            ]
        },
        {
            title: '规范 Standard',
            collapsable: true,
            children: [
                'specification/ali',
                'specification/git',
                'specification/linux01',
                'specification/objectModel'
            ]
        },
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'front-end/EChartsStudy',
                'front-end/js-json',
                'front-end/viaStart',
                'front-end/vuepress-plugin-boxx',
                'front-end/TCP&UDP'
            ]
        },
      
        {
            title: '随笔 Essay',
            collapsable: true,
            children: [
                'essay/20190928',
                'essay/20191109',
                'essay/20191116',
                'essay/20191130',
                'essay/20200227',
                'essay/20200301'
            ]
        },
        {
            title: 'HTML5',
            collapsable: true,
            children: [
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
              'css/css3新特性',
              'css/css3Flip'
            ]
          },
          {
            title: 'JS',
            collapsable: true,
            children: [
              'js/js数据类型',
              'js/js对象',
              'js/js继承',
              'js/js原型链、闭包',
              'js/js函数的四种调用方式'
            ]
          },
          {
            title: 'Vue.js',
            collapsable: true,
            children: [
              'Vue/Vue基础笔记',
              'Vue/Vue组件'
            ]
          },
          {
            title: '前端单元测试',
            collapsable: true,
            children: [
              'fe-unit-test/chai',
              'fe-unit-test/mocha',
              'fe-unit-test/vueTestUtils'
            ]
          },
          {
            title: '微信小程序',
            collapsable: true,
            children: [
              'wechat-mini-program/初识微信小程序',
            ]
          }

    ]
}