<template>
  <main class="frontpage">
    <div class="frontpage__wrap">
      <div class="container frontpage__container">
        <Notice
          text="This website uses <a href=''>cookies</a> and google adwords to ensure you receive the best experience"
        />

        <div class="frontpage__content" @click="log()">
          <transition name="fade">
            <h1 class="frontpage__heading" v-if="content">
              Akamuro Affiliate Network
            </h1>
          </transition>

          <transition name="slide">
            <div class="frontpage__content-separator" v-if="content"></div>
          </transition>

          <transition name="fade">
            <p class="frontpage__text" v-if="content">
              is a cost per action financial affiliate network, bringing
              together partners from all over the world. We provide you with
              hundreds of the best offers, analytics and unique tools optimized
              specifically for the European and Asian financial markets.
            </p>
          </transition>
        </div>
      </div>

      <div class="frontpage__bg">
        <Compare
          :preImg="greyed"
          :before="before"
          :after="after"
          full
          @initiated="content = false"
        >
        </Compare>
      </div>
    </div>
  </main>
</template>

<script>
import Notice from "@/components/Notice.vue";
import Compare from "@/components/Compare.vue";
import router from "@/router/index";

export default {
  name: "Home",
  components: {
    Notice,
    Compare,
  },
  data() {
    return {
      before: require("@/assets/img/bg/advertiser-bg-full.jpg"),
      after: require("@/assets/img/bg/publisher-bg-full.jpg"),
      greyed: require("@/assets/img/bg/greyed-bg.jpg"),
      content: true,
    };
  },
  methods: {
    log: function () {
      router.push('home')
    },
  },
};
</script>

<style lang="scss">
@import "~sass-rem/rem";

.frontpage {
  height: 100%;

  &__wrap {
    height: 100%;
    background-size: cover;
    padding-top: rem(45px);
  }

  &__bg {
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__heading {
    margin-bottom: rem(25px);
  }

  &__content {
    max-width: 315px;
    z-index: 10;
    color: #fff;

    &-separator {
      height: 3px;
      background: linear-gradient(
        89.99deg,
        #ffffff 0.01%,
        rgba(255, 255, 255, 0) 67.35%
      );
      width: 70vw;
      position: absolute;
      left: 0;
      transform: translateY(-15px);
    }
  }

  &__text {
    font-size: rem(14px);
    opacity: 0.9;
    line-height: 130%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: left 1.5s linear;
}
.slide-enter,
.slide-leave-to {
  left: 100vw;
}
</style>