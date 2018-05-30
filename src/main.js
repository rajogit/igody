// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './resource/index'
import Vuetify from 'vuetify'
import VueFrom from 'vue-formly'
import BootstrapVue from 'bootstrap-vue'
import AnimatedVue from 'animated-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css/animate.css'

import './assets/scritps/main'
import './assets/styles/main.scss'

Vue.use(Vuetify)
Vue.use(VueFrom)
Vue.use(BootstrapVue)
Vue.use(AnimatedVue)

Vue.config.productionTip =

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
  })
