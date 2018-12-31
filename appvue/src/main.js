import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import  VueJsonp  from  'vue-jsonp'
Vue.use(VueJsonp)
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
