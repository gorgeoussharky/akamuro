<template>
  <div id="app">
    <Header :page="page" />
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>



<script>
import Header from "@/components/Header.vue";

export default {
  components: { Header },

  methods: {
    colorize: function () {
      this.greyed = false;
    },
  },
  computed: {
    page: function(){
      return this.$route.name
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import "~@/assets/scss/variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/reboot";
@import "~sass-rem/rem";
@import "~@/assets/scss/fonts";
@import "~@/assets/scss/buttons";
@import "~sass-rem/rem";

@import "~@/assets/scss/base";

body {
  font-family: "MyriadPro";
  font-weight: 400;
  overflow: hidden;
  background-color: #000;
}

.content {
  position: relative;
  z-index: 10;
  height: 100%;
}

#app {
  height: 100vh;
}
</style>
