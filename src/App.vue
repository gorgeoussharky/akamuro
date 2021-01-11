<template>
  <div id="app">
    <Header :page="page" />
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />


  </div>
</template>



<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: { Header, Footer },

  methods: {
    colorize: function () {
      this.greyed = false;
    },
  },
  computed: {
    page: function () {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import "~@/assets/scss/variables";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/reboot";
@import "~@/assets/scss/fonts";
@import "~@/assets/scss/buttons";
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
  min-height: 100%;
}

#app {
  min-height: 100vh;
}
</style>
