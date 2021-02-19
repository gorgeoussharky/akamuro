import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'
import i18n from './i18n'
Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)

Vue.mixin({
  computed: {
    FixWebkitHeightBug() {

      var height = window.innerHeight;
      return height;
    }
  },
  methods: {
    isMobile: function () {
      if (window.matchMedia("(max-width: 599px)").matches) {
        return true;
      } else {
        return false;
      }
    },
    isMobileBig: function () {
      if (window.matchMedia("(max-width: 800px)").matches) {
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
    },
  },
})


new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')