import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import  VueJsonp  from  'vue-jsonp'
import store from './store'
Vue.use(VueJsonp)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
