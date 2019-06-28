<template>
   <div class="home" >
     <div class="top1" @click="GoGuang">
        <img class="titleicon" src="..\resourse\images\fcbc\logo.svg" height="40%" width="40%">

       <!-- <a class="titleName">
          台北故宫博物院
       </a> -->
     </div>
     <div>
       <div class="top">
         <div class="relicName">
            <div class="namesite">
              翡翠白菜(清)
            </div>
         </div>
        </div>
        <div class="bingpai">
              <div class="showimage" id="left">
                  <div>
                      <p class="likeit">
                        <img @click="changeUser" :src="isUser ? require('../resourse/images/user_bb.svg'): require('../resourse/images/user22.svg') " height="90%" width="100%">
                      </p>
                  </div>
                  <div>
                    <p class="likeit">
                      <!-- @click="changeNice" -->
                      <img @click="changeNice" :src="isNice ? require('../resourse/images/nice6.svg'): require('../resourse/images/unnice6.svg') " height="100%" width="110%" >
                    </p>
                  </div>
                  <div>
                    <p class="likeit">
                        <!-- @click="changeGet" -->
                      <img @click="changeGet" :src="isGet ? require('../resourse/images/get6.svg'): require('../resourse/images/unget6.svg') " height="100%" width="110%" >
                    </p>
                  </div>
              </div>
            <div class="lunbo" id="right">
              <mt-swipe :auto="2000" :show-indicators="false">
                <mt-swipe-item> <img src="..\resourse\images\fcbc\fcbc1.jpg" height="90%" width="90%" ></mt-swipe-item>
                <mt-swipe-item> <img src="..\resourse\images\fcbc\fcbc2.jpg" height="90%" width="90%"></mt-swipe-item>
                <mt-swipe-item> <img src="..\resourse\images\fcbc\fcbc3.jpg" height="90%" width="90%"></mt-swipe-item>
              </mt-swipe>
            </div>

        </div>
        <div class="chooselist">
          <div class="nav">
            <p class="imglist">  
                <img src="..\resourse\images\wen8.svg" width="10%" @click="actionSheet1">  
            </p>
          </div>
          <div class="nav">
            <p class="imglist">  
                <img src="..\resourse\images\shang8.svg" width="10%" @click="actionSheet2">  
            </p>
          </div>
          <div class="nav">
            <p class="imglist">
                <img src="..\resourse\images\she8.svg" width="10%" @click="actionSheet3">  
            </p>
          </div>
        </div>
        <div v-cloak class="introduc">
          {{introductionMsg}}
        </div>
     </div>
      <div class="direclist">
        <div class="listline">
          <p class="firsticon"><img class="titleicon" src="..\resourse\images\favicon.png" height="50%" width="50%"></p>
        </div>
        <div class="listline" @click="GoCollection">館藏</div>
        <div class="listline">
          <p class="secondicon"><img class="titleicon" src="..\resourse\images\right1.svg" height="50%" width="50%"></p>
        </div>
        <div class="listline" @click="GoCollection">玉器</div>
        <div class="listline">
          <p class="thirdicon"><img class="titleicon" src="..\resourse\images\right1.svg" height="50%" width="50%"></p>
        </div>
        <div class="listline" @click="GoItemize">擺件</div>
      </div>
      <div class="downblock">
        <div class="finatitle">國立故宮博物院</div>
        <div class="finaly">版權所有 @2019</div>
        <div class="finaly">天盛文創 技術支持</div>
      </div>
      <div>
        <mt-actionsheet :actions="dataWen" v-model="sheetVisible1">
        </mt-actionsheet>
      </div>
      <div>
        <mt-actionsheet :actions="dataShang" v-model="sheetVisible2">
        </mt-actionsheet>
      </div>
      <div>
        <mt-actionsheet :actions="dataShe" v-model="sheetVisible3">
        </mt-actionsheet>
      </div>
      <div>
        <mt-popup class="sharePopup" v-model="popupVisible" position="bottom">
          <div>
              <aplayer autoplay :music="musicList">
              </aplayer>
          </div>
        </mt-popup>
      </div>
      <div>
        <mt-popup class="sharePopup" v-model="VideopopupVisible" :state="VideopopupVisible">
          <div class="video-player vjs-custom-skin">
             <video-player
                ref="videoPlayer" 
                :playsinline="true" 
                :options="playerOptions"
                :video-url="videoUrl" 
                :state="state"
              ></video-player>
          </div>
        </mt-popup>
      </div>
  
    </div>
 </template>

 <script>
 import { introduction } from '../resourse/config.js'
 import aplayer from "vue-aplayer";
 import { videoPlayer } from 'vue-video-player'
  import '../../node_modules/video.js/dist/video-js.css'
  import '../../node_modules/vue-video-player/src/custom-theme.css'

 export default {
  name: 'home',

  components: {aplayer: aplayer, videoPlayer},
  data() {
    return {
      dataWen: [
      {name: '聽語音', method : this.DopopupVisible}, 
      {name: '看視頻', method : this.DOVideopopupVisible}
      ],
      dataShang: [
      {name: '淘寶-紀念品', method : this.GoTaobao}, 
      {name: '京東-紀念品', method : this.Gojingdong}
      ],
      dataShe: [
        {name: '分享到微信', method : this.GoWeixin},
        {name: '分享到微博', method : this.GoWeibo}
      ],
      musicList: {
              title: "翡翠白菜",
              author: "專業解說",
              url: 'http://cdlshow.xyz/resource/fcbc.mp3',
              pic: "",
              lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
      },
      sheetVisible1: false,
      sheetVisible2: false,
      sheetVisible3: false,
      isUser: false,
      isNice: false,
      isGet: false,
      popupVisible: false,
      VideopopupVisible: false,
    
      
      // events: ['change'],

      introductionMsg: introduction.fcbc,
      isPlaying: false,
      
      // 视频播放
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",
          src: "",   //url地址
        }],
        poster: "", //你的封面地址
        notSupportedMessage: '此視頻暫無法播放，請稍後再試', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }

      }
    }
    

  },  
  watch: {//监听视频窗口，不存在，将视频路径设为空
      VideopopupVisible(){
        if(this.VideopopupVisible)
         this.playerOptions.sources[0].src = 'http://cdlshow.xyz/resource/fcbc.mp4'
        else
         this.playerOptions.sources[0].src = ''
      }
  },



  methods:{
  
    actionSheet1(){
     this.sheetVisible1 = true;
    },

   actionSheet2(){
     this.sheetVisible2 = true;
    },

   actionSheet3(){
     this.sheetVisible3 = true;
    },

    GoVideo(){
      this.$router.push('/video')
    },

    GoGuang(){
      this.$router.push('/')
    },

    GoUser(){
      this.$router.push('/user')
    },
        
    GoItemize(){
      this.$router.push('/itemize')
    },
        
    GoCollection(){
      this.$router.push('/collection')
    },
    

    GoTaobao () {
      window.location.href = 'https://detail.tmall.com/item.htm?id=41971811710&ali_trackid=2:mm_99396806_46570087_81282000356:1561277829_175_2086987417&spm=a231o.7712113/g.1004.1&pvid=200_11.27.53.96_242623_1561277822248'
    },

    Gojingdong(){
      window.location.href = 'https://item.jd.com/10502673900.html'
    },

    isPlayAudio(){
      this.playAudio()
    },

    changeUser(){
        this.isUser = !this.isUser
    },

    changeNice(){
      this.isNice = !this.isNice
    },
    
    changeGet(){
      this.isGet = !this.isGet
    },

    DopopupVisible(){this.popupVisible = true, this.sheetVisible1 = false },
    DOVideopopupVisible(){this.VideopopupVisible = true, this.sheetVisible1 = false }

    },

    mounted() {
      this.musicList = {
      title: "翡翠白菜",
      author: "專業解說",
      url: 'http://cdlshow.xyz/resource/fcbc.mp3',
      pic: "",
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
    };
  }
  }
 </script>
 
<style src="../resourse/css/home.css">
</style>


 
 