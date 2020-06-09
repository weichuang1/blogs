//导航栏
module.exports = [
    { text: 'home', link: '/index.html', icon: 'reco-home' },
    { text: 'views', link: '/views/', icon: 'reco-document' },
    {
        text: 'documents', icon: 'reco-document',
        items: [{
            text: 'Vue.js',
            link: 'https://cn.vuejs.org/v2/guide/',
        },{
            text: 'valine评论插件',
            link: 'https://valine.js.org/',
        },{
            text: 'echarts',
            link: 'https://echarts.apache.org/zh/index.html',
        },{
            text: 'jquery插件库',
            link: 'http://www.jq22.com/',
        },{
            text: '字体css图标',
            link: 'http://www.fontawesome.com.cn/',
        },{
            text: 'TheaterJS',
            link: 'http://www.fly63.com/nav/1940',
        },
        {
            text: 'Browsersync',
            link: 'http://www.browsersync.cn/',
        }, {
            text: 'BootCDN',
            link: 'https://www.bootcdn.cn/',
        }, {
            text: 'Linux命令大全',
            link: 'https://www.linuxcool.com/',
        }, {
            text: '编程语言排行榜',
            link: 'https://www.tiobe.com/tiobe-index/',
        }]
       
    },
    {
        text: 'instrument', icon: 'reco-api',
        items: [{
            text: 'Local tool',
            items: [{
                text: 'My Project',
                link: '/other/project',
            }]
        },
        {
            text: 'Convenient online',
            items: [{
                text: 'PDF编辑器',
                link: 'https://smallpdf.com/cn/pdf-to-word',
            }, {
                text: 'JSON编辑器',
                link: 'https://www.bejson.com/jsoneditoronline',
            }, {
                text: ' MD表格生成器',
                link: 'https://tableconvert.com',
            }, {
                text: 'CRON表达式',
                link: 'http://cron.qqe2.com/',
            }, {
                text: '代码格式化',
                link: 'http://tool.oschina.net/codeformat/html',
            }, {
                text: ' 二维码生成器',
                link: 'https://cli.im/',
            }, {
                text: '公式编辑器',
                link: 'https://zh.numberempire.com/latexequationeditor.php',
            }, {
                text: '配置文件转换器',
                link: 'http://www.toyaml.com/',
            }, {
                text: ' 编码转换器',
                link: 'http://tool.chinaz.com/tools/native_ascii.aspx',
            }]
        },]
    },
    { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    { text: 'About', link: '/about/', icon: 'reco-message' }
]