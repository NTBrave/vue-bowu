import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import audio from './resourse/audio/fcbc.mp3'
import Header from 'mint-ui/lib/header'
import { Swipe, SwipeItem, Actionsheet, Popup } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import "mint-ui/lib/swipe/style.css"
import "mint-ui/lib/actionsheet/style.css"
import "mint-ui/lib/popup/style.css"
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.config.productionTip = false

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.prototype.playAudio = () => {
//   let buttonAudio = document.getElementById('eventAudio');
//   buttonAudio.setAttribute('src',audio)
//   buttonAudio.play()
// }