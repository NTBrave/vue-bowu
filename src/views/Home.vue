<template>
   <div class="home" >
     <div class="top1" @click="GoGuang">
        <img class="titleicon" src="..\resourse\images\fcbc\logo.svg" height="40%" width="40%">

     </div>
     <div>
       <div class="top">
          <div class="User">
              <div class="Usericon-h" @click="GoUser">
                <img @click="changeUser" :src="isUser ? require('../resourse/images/user_bb.svg'): require('../resourse/images/user22.svg') " height="40%" width="40%"> 
              </div>
          </div>
         <div class="relicName">
            <div class="namesite">
              翡翠白菜(清)
            </div>
         </div>
        </div>
        <div class="bingpai">
              <div class="showimage" id="left">
                
                  <div class="Niceit">
                    <p  @click="show_nice" >
                      <!-- @click="changeNice" -->
                      <img @click="changeNice" :src="isNice ? require('../resourse/images/nice00.svg'): require('../resourse/images/unnice6.svg') " height="100%" width="110%" >
                    </p>
                  </div>
                  <div class="Getit">
                    <p @click="show_get">
                        <!-- @click="changeGet" -->
                      <img @click="changeGet" :src="isGet ? require('../resourse/images/get00.svg'): require('../resourse/images/unget6.svg') " height="100%" width="110%" >
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
              <aplayer  
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
      <div class="sharecolor">
        <mt-popup class="shareme" v-model="sharewindow" position="bottom" >
          <vue-native-share :shareMenu="shareMenu" :config="config" />
        </mt-popup>
      </div>
      
    </div>
 </template>

 <script>
 import { introduction, Goods } from '../resourse/config.js'
 import Aplayer from "vue-aplayer";
 import { videoPlayer } from 'vue-video-player'
  import '../../node_modules/video.js/dist/video-js.css'
  import '../../node_modules/vue-video-player/src/custom-theme.css'
 import { Toast } from "mint-ui";
 import vueNativeShare from 'vue-native-share'//分享功能的组件
 export default {
  name: 'home',

  components: { Aplayer, videoPlayer,vueNativeShare},
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
      // dataShe: [
      //   {name: '分享到微信', method : this.GoWeixin},
      //   {name: '分享到微博', method : this.GoWeibo}
      // ],
      musicList: {
              title: "翡翠白菜",
              author: "專業解說",
              url: 'http://cdlshow.xyz/resource/fcbc.mp3',
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

      introductionMsg: introduction.fcbc,
      tao_url: Goods.tao_fcbc,
      jing_url: Goods.jing_fcbc,
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
          src: 'http://cdlshow.xyz/resource/fcbc.mp4',   //url地址
        }],
        poster: "", //你的封面地址
        notSupportedMessage: '此視頻暫無法播放，請稍後再試', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }

      },
      shareMenu: [0,1,2,3,4,5],
      config: {
       title: '翡翠白菜',
        desc:'翡翠白菜，又稱“翠玉白菜”，現藏臺北故宮博物館。其材質為緬甸翡翠玉，高18.7厘米，寬9.1厘米，厚度為5.07厘米',
        img:'http://cdlshow.xyz/resource/fcbc1.jpg',
        img_title:'翡翠白菜',
        link: 'http://cdlshow.xyz/#/home',
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

    GoGuang(){
      this.$router.push('/')
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
      window.location.href = this.jing_url
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
      title: "翡翠白菜",
      author: "專業解說",
      url: 'http://cdlshow.xyz/resource/fcbc.mp3',
      pic: "http://cdlshow.xyz/resource/jqmd1.png",
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
    };
  }
  }
 </script>
 
<style src="../resourse/css/home.css">
</style>


 
 