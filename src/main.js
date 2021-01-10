import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    isMobile: function () {
      if (window.matchMedia("(max-width: 598px)").matches) {
        return true;
      } else {
        return false;
      }
    },
  },
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')