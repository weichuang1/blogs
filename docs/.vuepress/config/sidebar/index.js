//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '面试题',
            collapsable: true,
            children: [
                'interview/sum_db_001',
                'interview/sum_fe_001',
                'interview/sum_fe_002'
            ]
        },
        {
            title: '网络',
            collapsable: true,
            children: [
                'network/TCP&UDP',
                'network/git',
                'network/linux'
            ]
        },
        {
          title: 'ECharts',
          collapsable: true,
          children: [
              'ECharts/EChartsStudy',
          ]
      },
      
        {
            title: '牢骚日记',
            collapsable: true,
            children: [
                'essay/20200606',
                'essay/20190928',
                'essay/20191109',
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
              'js/js函数的四种调用方式',
              'js/js-json'
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