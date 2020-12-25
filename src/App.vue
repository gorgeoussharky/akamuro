<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>



<script>
import Header from "@/components/Header.vue";

export default {
  components: { Header },

  methods: {
    log: function () {
      console.log("test");
    },
    colorize: function () {
      this.$set(this, "greyed", false);
    },
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
@import "~@/assets/scss/base";

body {
  font-family: "MyriadPro";
  font-weight: 400;
  overflow: hidden;
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
