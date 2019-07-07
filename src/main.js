import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import audio from './resourse/audio/fcbc.mp3'
import Header from 'mint-ui/lib/header'
import { Swipe, SwipeItem, Actionsheet, Popup ,  IndexList, IndexSection , Cell  } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import "mint-ui/lib/swipe/style.css"
import "mint-ui/lib/actionsheet/style.css"
import "mint-ui/lib/popup/style.css"
import "mint-ui/lib/index-list/style.css"
import "mint-ui/lib/index-section/style.css"
import "mint-ui/lib/cell/style.css"
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

import { TabContainer, TabContainerItem } from 'mint-ui';
import "mint-ui/lib/tab-container/style.css"
import "mint-ui/lib/tab-container-item/style.css"
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

import { Toast } from 'mint-ui';
import "mint-ui/lib/toast/style.css"
Vue.component(Toast.name, Toast);

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);

import { Button } from 'mint-ui';
import "mint-ui/lib/button/style.css"
Vue.component(Button.name, Button);
import "mint-ui/lib/button/style.css"
import { Field } from 'mint-ui';
import "mint-ui/lib/field/style.css"
Vue.component(Field.name, Field);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.prototype.playAudio = () => {
//   let buttonAudio = document.getElementById('eventAudio');
//   buttonAudio.setAttribute('src',audio)
//   buttonAudio.play()
// }