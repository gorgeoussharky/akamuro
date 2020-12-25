<template>
  <div id="app">
    <Header />

    <div class="bg">
      <image-compare :before="before" :after="after" full> </image-compare>

      <div class="bg__range">
        <div class="bg__range-left">
          Pubisher
          <svg
            width="24"
            height="11"
            viewBox="0 0 24 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.5"
              x1="9"
              y1="5.67871"
              x2="10"
              y2="5.67871"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              opacity="0.5"
              x1="14"
              y1="5.67871"
              x2="23"
              y2="5.67871"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M8 1.67871L1 5.67871L8 9.67871"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="bg__range-right">
          Advertiser
          <svg
            width="24"
            height="11"
            viewBox="0 0 24 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.5"
              x1="15"
              y1="5.67871"
              x2="14"
              y2="5.67871"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              opacity="0.5"
              x1="10"
              y1="5.67871"
              x2="1"
              y2="5.67871"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M16 9.67871L23 5.67871L16 1.67871"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>



<script>
import Header from "@/components/Header.vue";
import imageCompare from "vue-image-compare2";

export default {
  components: { Header, imageCompare },
  data() {
    return {
      before_samurai: require("@/assets/img/advertiser-samurai.png"),
      after_samurai: require("@/assets/img/publisher-samurai.png"),
      before: require("@/assets/img/bg/advertiser-bg-full.jpg"),
      after: require("@/assets/img/bg/publisher-bg-full.jpg"),
    };
  },
  methods: {
    log: function () {
      console.log("test");
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
}

.bg {
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &__range {
    position: absolute;
    bottom: 54px;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;

    &::before {
      content: "";
      background-color: #fff;
      opacity: 0.3;
      height: 4px;
      width: 90%;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
    }

    &-left {
      font-size: rem(24px);
      color: #fff;
      position: absolute;
      top: -40px;
      left: 5%;

      svg {
        position: absolute;
        left: -40px;
        bottom: -9px;
      }
    }

    &-right {
      font-size: rem(24px);
      color: #fff;
      position: absolute;
      top: -40px;
      right: 5%;

      svg {
        position: absolute;
        right: -40px;
        bottom: -9px;
      }
    }
  }

  img {
    object-fit: cover !important;
  }

  .handle {
    backdrop-filter: blur(2px);
    width: 10px !important;
    color: transparent !important;
    cursor: pointer !important;
    z-index: 100;

    &-icon.left {
      bottom: 20px;
      top: unset;
      width: 34px;
      height: 35px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='7' viewBox='0 0 28 7' fill='none'%3E%3Cstyle%3E.a%7Bfill:white;stroke-width:0.2;stroke:white;%7D%3C/style%3E%3Cpath d='M27 4L27 4 24.2 6.8C24.2 6.8 24.2 6.8 24.2 6.8L24.2 6.8 24.1 6.7 27 4ZM27 4C27.1 3.9 27.1 3.7 27 3.6L27 3.6M27 4L27 3.6M27 3.6L24.2 0.8 27 3.6ZM24 0.7C24.1 0.7 24.2 0.7 24.2 0.8L24 0.7ZM24 0.7C23.9 0.7 23.8 0.7 23.8 0.8 23.7 0.9 23.7 1.1 23.8 1.2L26.3 3.8 24 0.7Z' class='a'/%3E%3Cpath d='M1.2 3.7L1.2 3.7 3.8 0.7C3.8 0.7 3.8 0.7 3.8 0.7L3.8 0.7 3.9 0.8 1.2 3.7ZM1.2 3.7C1 3.8 1.1 4 1.2 4.1L1.2 4.1M1.2 3.7L1.2 4.1M1.2 4.1L4.1 6.7 1.2 4.1ZM4.4 6.8C4.3 6.8 4.2 6.8 4.1 6.7L4.4 6.8ZM4.4 6.8C4.5 6.8 4.5 6.7 4.6 6.7 4.7 6.5 4.7 6.3 4.6 6.2L1.8 3.8 4.4 6.8Z' class='a'/%3E%3Ccircle cx='14' cy='3.7' r='3' fill='white'/%3E%3C/svg%3E");
      background-color: #9f132c;
      border-radius: 50%;
      background-position: center;
      background-size: 80%;
      background-repeat: no-repeat;
      transform: translate(-50%, -50%);
    }
  }
}

.content {
  position: relative;
  z-index: 10;
}

#app {
  height: 100vh;
}
</style>
