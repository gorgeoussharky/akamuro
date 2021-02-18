<template>
  <div id="app" v-if="orientation">
    <Header ref="header" :page="page" />
    <div class="content">
      <transition name="pageFade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
  <div id="app" class="lanscape" v-else>Please rotate your device</div>
</template>



<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { formType } from "@/global/registerFormType.js";

export default {
  components: { Header, Footer },
  data() {
    return {
      orientation: true,
    };
  },
  methods: {
    colorize: function () {
      this.greyed = false;
    },
  },
  watch: {
    page: function (val) {
      if (val != "Registration") {
        this.$refs.header.isPublisherForm = false;
      }
      if (val == "Publisher") {
        this.$refs.header.isPublisherForm = true;
      }
    },
  },
  mounted() {
    if (this.isMobileBig()) {
      if (window.orientation == 0) {
        this.orientation = true;
      } else {
        this.orientation = false;
      }

      window.addEventListener("orientationchange", () => {
        location.reload();

        if (window.orientation == 0) {
          this.orientation = true;
        } else {
          this.orientation = false;
        }
      });
    }

    formType.$on("typeChanged", (type) => {
      if (type == "publisher") {
        this.$refs.header.isPublisherForm = true;
      } else {
        this.$refs.header.isPublisherForm = false;
      }
    });
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
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/grid";
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
  position: relative;
  overflow: hidden;
}

.lanscape {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 36px;
  height: 100vh;
}

.pageFade-enter-active,
.pageFade-leave-active {
  transition: opacity 1s;
}

.pageFade-enter,
.pageFade-leave-to {
  opacity: 0;
}
</style>
