---
home: true
bgImage: '/banner.png'
bgImageStyle: {
  height: '650px'
}
isShowTitleInHome: true
---

<banner/>
<style>
.home-center .content__default:not(.custom) {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

  /* 阻止描述冒泡 */
.home .hero .description{
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
}

@media screen and (max-width: $MQMobile){
  .clock {
    margin-top: -35%
  }
}
@media screen and (max-width: 480px){
  .banner{
    top:-142rem;
  }
  .h-information {
    top:-35rem;
  }
  .home-blog .hero h1 {
    font-size:3rem;
    margin: 7rem auto 1.8rem;
  }
  #app .theme-container .navbar .home-link .site-name {
 width: 150px;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
  }
 
}
</style>
