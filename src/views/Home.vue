<template>
  <main class="frontpage">
    <div class="frontpage__wrap" :style="{ height: this.FixWebkitHeightBug + 'px' }">
      <div class="container-fluid frontpage__container">
        <Notice @accepted="acceptCookies()" />

        <div class="frontpage__content">
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
          class="frontpage__img-compare"
          :disabled="cookies ? true : false"
          :preImg="greyed"
          :before="before"
          :after="after"
          :before_2="before_samurai"
          :after_2="after_samurai"
          full
          @initiated="content = false"
          @paused="content = true"
          @reachedRight="switchPage('advertiser')"
          @reachedLeft="switchPage('publisher')"
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
      before: require("@/assets/img/bg/advertiser-bg.jpg"),
      after: require("@/assets/img/bg/publisher-bg.jpg"),
      before_samurai: require("@/assets/img/samurai-advertiser-stand.png"),
      after_samurai: require("@/assets/img/samurai-publisher-stand.png"),
      greyed: require("@/assets/img/bg/greyed-bg.jpg"),
      content: true,
      cookies: true,
    };
  },
  methods: {
    acceptCookies: function () {
      if (this.isMobile()) {
        this.cookies = false;
        this.content = false;
      } else {
        this.cookies = false;
      }
    },
    switchPage: function (page) {
      router.push(page);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.frontpage {
  &__wrap {
    height: 100vh;
    background-size: cover;
    padding-top: rem(45px);
    display: flex;
    align-items: center;
  }

  &__bg {
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    @include media-breakpoint-down(xs) {
      background-image: url("~@/assets/img/bg/greyed-bg-empty.jpg");
      background-size: cover;
      background-position: center;
    }
  }

  &__img-compare {
    transition: 1s;
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
    max-width: 290px;
    z-index: 10;
    color: #fff;
    margin-top: rem(-120px);
    position: relative;

    &-separator {
      height: 3px;
      background: linear-gradient(
        89.99deg,
        #ffffff 0.01%,
        rgba(255, 255, 255, 0) 100%
      );
      width: calc(100% + 45px);
      position: absolute;
      left: -45px;
      transform: translateY(-15px);

      @include media-breakpoint-down(sm) {
        left: -22px;
        width: calc(100% + 22px);
      }
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