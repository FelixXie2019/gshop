import Vue from 'vue'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import router from './router'
import Header from "@components/Header/Header";


//注册全局组件
Vue.component('Header',Header)
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  // components: {
  //   App
  // },
  // template: '<App/>'
  render: h => h(App),
  router, // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
}).$mount('#app')