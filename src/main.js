import './styles/fonts.scss'
import './styles/mixins.scss'

import Vue from 'vue'
import App from './App.vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll)
Vue.use(VueAnimateOnScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
