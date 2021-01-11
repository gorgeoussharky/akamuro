import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'
Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)

Vue.mixin({
  methods: {
    isMobile: function () {
      if (window.matchMedia("(max-width: 599px)").matches) {
        return true;
      } else {
        return false;
      }
    },
    isTablet: function () {
      if (window.matchMedia("(max-width: 991px) and (min-width:600px)").matches) {
        return true;
      } else {
        return false;
      }
    }
  },
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')