<template>
   <div class="newhome" >
     <div class="newtop1" @click="GoGuo">
        <img class="titleicon" src="..\resourse\images\jqmd\logo.png" height="40%" width="40%">
     </div>
     <div class="bg-color_hui">
       <div class="top">
          <div class="User">
              <div class="Usericon" @click="GoUser">
                <img @click="changeUser" :src="isUser ? require('../resourse/images/user_bb.svg'): require('../resourse/images/user22.svg') " height="40%" width="40%"> 
              </div>
          </div>
         <div class="relicNames">
            <div class="namesite">
              金漆木雕大神龛
            </div>
         </div>
        </div>
        <div class="bingpai">
             
              <div class="showimages" id="left">
                  
                  <div class="Niceit">
                    <p @click="show_nice" >
                      
                      <img @click="changeNice" :src="isNice ? require('../resourse/images/nice00.svg'): require('../resourse/images/unnice6.svg') " height="100%" width="110%" >
                    </p>
                  </div>
                  <div class="Getit">
                    <p @click="show_get">
              
                      <img @click="changeGet" :src="isGet ? require('../resourse/images/get00.svg'): require('../resourse/images/unget6.svg') " height="100%" width="110%" >
                    </p>
                  </div>
              </div>
            <div class="lunbo" id="right">
              <mt-swipe :auto="2000" :show-indicators="false">
                <mt-swipe-item> <img src="..\resourse\images\jqmd\jqmd1.png" height="90%" width="80%" ></mt-swipe-item>
                <mt-swipe-item> <img src="..\resourse\images\jqmd\jqmd2.png" height="90%" width="80%"></mt-swipe-item>
                <mt-swipe-item> <img src="..\resourse\images\jqmd\jqmd3.png" height="90%" width="80%"></mt-swipe-item>
                <mt-swipe-item> <img src="..\resourse\images\jqmd\jqmd4.png" height="90%" width="80%"></mt-swipe-item>
              </mt-swipe>
            </div>

        </div>
        <div class="chooselist">
          <div class="newnav">
            <div class="imglist">  
                <img src="..\resourse\images\wen_h3.svg" width="20%" @click="actionSheet1">  
            </div>
           
          </div>
          <div class="newnav">
            <div class="imglist">  
                <img src="..\resourse\images\shang_h2.svg" width="20%" @click="actionSheet2">  
            </div>
 
          </div>
          <div class="newnav">
            <div class="imglist">
                <img src="..\resourse\images\she_h4.svg" width="20%" @click="actionSheet3">  
            </div>

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
        <div class="listline" @click="GoCollection">藏品</div>
        <div class="listline">
          <p class="secondicon"><img class="titleicon" src="..\resourse\images\right.svg" height="50%" width="50%"></p>
        </div>
        <div class="listline" @click="GoCollection">文物</div>
        <div class="listline">
          <p class="thirdicon"><img class="titleicon" src="..\resourse\images\right.svg" height="50%" width="50%"></p>
        </div>
        <div class="listline" @click="GoItemize">木雕</div>
      </div>
      <div class="newdownblock">
        <div class="newfinatitle">广东省博物馆</div>
        <div class="newfinaly">版权所有 @2019</div>
        <div class="newfinaly">天盛文创 技术支持</div>
      </div>
      <div>
        <mt-actionsheet :actions="dataWen" v-model="sheetVisible1">
        </mt-actionsheet>
      </div>
      <div>
        <mt-actionsheet :actions="dataShang" v-model="sheetVisible2">
        </mt-actionsheet>
      </div>
      <!-- <div>
        <mt-actionsheet :actions="dataShe" v-model="sheetVisible3">
        </mt-actionsheet>
      </div> -->
      <div>
        <mt-popup class="sharePopup" v-model="popupVisible" position="bottom" :modal='clickfalse' :closeOnClickModal='clickfalse'>
          <div id="video-win">
            <div id="stop-video-win"> 
              <div @click="stopaudeowin">
                    <img src="..\resourse\images\goout1.svg">
              </div>
            </div>
              <aplayer  autoplay
              ref="myaudeo"
              :music="musicList"
              @play="onPlayerPlay($event)"
              @pause="onPlayerPause($event)"
              @ended="onPlayerEnded($event)"
              >
              
              </aplayer>
          </div>
        </mt-popup>
      </div>
      <div>
        <mt-popup class="sharevideoPopup" v-model="VideopopupVisible" :modal='clickfalse' :closeOnClickModal='clickfalse'>
          <div class="video-player vjs-custom-skin" id="video-win">
              <div id="stop-video-win" > 
                <div @click="stopvideowin">
                  <img src="..\resourse\images\goout2.svg">
                </div>
                </div>
             <video-player
                ref="videoPlayer" 
                :playsinline="true" 
                :options="playerOptions"
                @ended="onVideoPlayerEnded($event)"
                @pause="onVideoPlayerPause($event)"
                @play="onVideoPlayerPlay($event)">
                 
              </video-player>
          </div>
        </mt-popup>
      </div>
      <mt-popup class="shareme" v-model="sharewindow" position="bottom">
          <vue-native-share :shareMenu="shareMenu" :config="config" />
      </mt-popup>
     
    </div>
 </template>

 <script>
 import { introduction, Goods  } from '../resourse/config.js'
 import Aplayer from "vue-aplayer";
 import { videoPlayer } from 'vue-video-player'
 import '../../node_modules/video.js/dist/video-js.css'
 import '../../node_modules/vue-video-player/src/custom-theme.css'
 import { Toast } from "mint-ui";

 import vueNativeShare from 'vue-native-share'//分享功能的组件
//  import * as videojs from 'video.js'
 export default {
  name: 'home',

  components: { Aplayer, videoPlayer,vueNativeShare},
  
  data() {
    return {
      dataWen: [
      {name: '听语音', method : this.DopopupVisible}, 
      {name: '看视频', method : this.DOVideopopupVisible}
      ],
      dataShang: [
      {name: '淘宝', method : this.GoTaobao}, 
      {name: '京东', method : this.Gojingdong}
      ],
      // dataShe: [
      //   {name: '分享到微信', method : this.GoWeixin},
      //   {name: '分享到微博', method : this.GoWeibo}
      // ],
      musicList: {
              title: "金漆木雕大神龛",
              author: "专业解说",
              url: 'http://cdlshow.xyz/resource/jqmd.mp3',
              pic: "http://cdlshow.xyz/resource/jqmd1.png",
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

      introductionMsg: introduction.jqmd,
      tao_url: Goods.tao_jqmd,
      jing_url: Goods.jing_jqmd,
      isPlaying: false,

      // 把这个 Toast实例 注册到data中，只要在这个组件内部中，都能访问到
      toastInstanse: null,
      nicemse:"",
      getmsg:"",
      isflastmusic: false,
      clickfalse:false,
      miniandfloat: true,
      sharewindow: false,//分享窗口的状态
      
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
          src: 'http://cdlshow.xyz/resource/jqmd.mp4',   //url地址
        }],
        poster: "", //你的封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }

      },
      shareMenu: [0,1,2,3,4,5],
      config: {
        title: '金漆木雕大神龛',
        desc:"金漆木雕大神龛，民国廿四年文物，高330厘米，宽231厘米，深145厘米。",
        img:'http://cdlshow.xyz/resource/jqmd1.png',
        img_title:'金漆木雕',
        link: 'http://cdlshow.xyz/#/',
        success: () => {console.log('success')}, //成功回调
        cancel: () => {console.log('cancel')}, //取消回调
      },
    }

  }, 
  computed:
  {
    player(){
      return this.$refs.videoPlayer.player
    }
  } ,
  watch: {//设置视频和音频不能同时存在
      //监听视频窗口
      VideopopupVisible(){
        if(this.VideopopupVisible)
         this.stopaudeowin()
      },
      //监听音乐播放窗口
      popupVisible(){
        if(this.popupVisible)
         this.stopvideowin()
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
     this.sharewindow = true;
    },

    GoVideo(){
      this.$router.push('/video')
    },

    GoGuo(){
      this.$router.push('/oldhome')
    },

    GoUser(){
      this.$router.push('/user')
    },
        
    GoItemize(){
      this.$router.push('/itemize/1')
    },
        
    GoCollection(){
      this.$router.push('/collection')
    },
    

    GoTaobao () {
      window.location.href = this.tao_url
    },

    Gojingdong(){
      window.location.href =  this.jing_url
    },

    isPlayAudio(){
      this.playAudio()
    },

    changeUser(){
        this.isUser = !this.isUser
    },

    changeNice(){
      this.isNice = !this.isNice;
    },
    
    changeGet(){
      this.isGet = !this.isGet;
    },

    DopopupVisible(){this.popupVisible = true, this.sheetVisible1 = false },
    DOVideopopupVisible(){this.VideopopupVisible = true, this.sheetVisible1 = false },

          // listen event
    onPlayerPlay() {
      this.popupVisible = true
      // console.log('player play!', player)
    },
    onPlayerPause() {
      // this.popupVisible = false
      // console.log('player pause!', player)
    },
    onPlayerEnded() {
       this.popupVisible = false
      // console.log('player ended!', player)
      },
    
    onVideoPlayerPlay() {
      // this.VideopopupVisible = true
      // console.log('player play!', player)
    },
    onVideoPlayerPause() {
      // this.VideopopupVisible = false
      // console.log('player pause!', player)
    },
    onVideoPlayerEnded() {
       this.VideopopupVisible = false
      // console.log('player ended!', player)
      },

    show_nice() {
      // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
      if(this.isNice==false){this.nicemsg = "取消点赞"}
      else{this.nicemsg = "已点赞"}
      this.toastInstanse = Toast({
        message: this.nicemsg, //弹窗内容
        position: "middle", //弹窗位置
        duration: 1000, //弹窗时间毫秒,如果值为-1，则不会消失
        iconClass: "glyphicon glyphicon-heart", //设置 图标类
        className: "mytoast_nice" //自定义Toast 样式，需要自己提供一个类名
      });
    },
    show_get() {
      // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
      if(this.isGet==false){this.getmsg = "取消收藏"}
      else{this.getmsg = "已收藏"}
      this.toastInstanse = Toast({
        message: this.getmsg, //弹窗内容
        position: "middle", //弹窗位置
        duration: 1000, //弹窗时间毫秒,如果值为-1，则不会消失
        iconClass: "glyphicon glyphicon-heart", //设置 图标类
        className: "mytoast_get" //自定义Toast 样式，需要自己提供一个类名
      });
    },
    stopvideowin(){
        this.VideopopupVisible = false;
        this.$refs.videoPlayer.player.pause()
      },
    stopaudeowin(){
        this.popupVisible = false;
        this.$refs.myaudeo.pause()

      },
   
  },

    mounted() {
      this.musicList = {
      title: "金漆木雕大神龛",
      author: "专业解说",
      url: 'http://cdlshow.xyz/resource/jqmd.mp3',
      pic: "http://cdlshow.xyz/resource/jqmd1.png",
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
    };
  
  
  
  }
  }
 </script>
 
<style src="../resourse/css/newhome.css">
  
    /* .video-js{
      .vjs-control-bar{
        .vjs-icon-custombutton {
          font-family: VideoJS;
          font-weight: normal;
          font-style: normal; 
          }
          .vjs-icon-custombutton:before {
            content: "\f108";
            font-size: 1.8em;
            line-height: 1.67;
          }
        }
      } */
</style>



 
 