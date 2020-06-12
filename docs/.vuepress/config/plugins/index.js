module.exports = [
    [
        require('../../plugins/KanBanNiang'),
        {
          theme: ['haruto'],
          width: 200,
          height: 300,
          modelStyle: {
            position: 'fixed',
            right: '70px',
            bottom: '-30px',
            opacity: '0.9'
          },
          messageStyle: {
            position: 'fixed',
            right: '70px',
            bottom: '260px'
          },
          btnStyle: {
            bottom: '10px',
            right: '80px'
          }
        }
      ],
        //  [
    //   require('../../plugins/BgMusic'),
    //   {
    //     audios: [
    //       {
    //         name: '一定要爱你',
    //         artist: '田一龙',
    //         url: './music/yiding.mp3',
    //         cover: './music/yiding.jpg'
    //       },
    //       {
    //         name: '爱很美',
    //         artist: '刘佳',
    //         url: './music/aihenmei.mp3',
    //         cover: './music/aihenmei.jpg'
    //       },
    //       {
    //         name: 'Sold Out',
    //         artist: 'Hawk Nelson',
    //         url: './music/soldout.mp3',
    //         cover: './music/sold.jpg'
    //       },
    //       {
    //         name: '就当是你为了我',
    //         artist: '许诺',
    //         url: './music/xunuo.mp3',
    //         cover: './music/xunuo.jpg'
    //       },
    //       {
    //         name: '喜欢',
    //         artist: '赵奕欢',
    //         url: './music/xihuan.mp3',
    //         cover: './music/xihuan.jpg'
    //       },
    //       {
    //         name: '左手指月',
    //         artist: '黄霄云',
    //         url: './music/zhiyue.mp3',
    //         cover: './music/zhiyue.jpg'
    //       },
    //       {
    //         name: 'Something Just Like This',
    //         artist: 'Anthony Keyrouz/Romy Wave',
    //         url: './music/this.mp3',
    //         cover: './music/this.jpg'
    //       }
    //     ]
    //   }
    // ]
    // ,
      require('../../plugins/notification/index'),
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        }
      ],
     
      require('../../plugins/musicPlayer/index'),
      ['@vuepress/last-updated', { // "上次更新"时间格式
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
        }
      }]

]