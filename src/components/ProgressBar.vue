<template>
  <div class="progress-bar__wrap">
    <button
      class="progress-bar__btn progress-bar__btn--prev"
      @click="decrementStep()"
    >
      <svg
        width="8"
        height="10"
        viewBox="0 0 8 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M7 8.4641L0.999999 5L7 1.5359L7 8.4641Z"
          fill="white"
          fill-opacity="0.01"
          stroke="white"
        />
      </svg>
    </button>
    <div class="progress-bar__bar">
      <transition name="fade" v-if="!isMobile()">
        <div
          class="progress-bar__step progress-bar__step--1"
          key="step1"
          v-if="currentStep == 1 || currentStep == 1.5"
        >
          01
        </div>
        <div
          class="progress-bar__step progress-bar__step--2"
          key="step2"
          v-else-if="currentStep == 2"
        >
          02
        </div>
        <div
          class="progress-bar__step progress-bar__step--3"
          key="step3"
          v-else-if="currentStep == 3"
        >
          03
        </div>
      </transition>

      <div class="progress-bar__progress" :style="{ width: barWidth }"></div>
    </div>
    <button
      class="progress-bar__btn progress-bar__btn--next"
      :disabled="currentStep > 2"
      @click="incrementStep()"
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M3 1.5359L9 5L3 8.4641L3 1.5359Z"
          fill="white"
          fill-opacity="0.01"
          stroke="white"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import router from "@/router/index";

export default {
  name: "ProgressBar",
  model: {
    prop: "step",
    event: "change",
  },
  data() {
    return {
      currentStep: this.step,
      timeout: false,
    };
  },
  props: {
    step: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: "",
    },
  },
  mounted: function () {
    var publisher = document.querySelector(".publisher"),
      advertiser = document.querySelector(".adpage"),
      form = document.querySelector(".signup-form");
    if (!this.isMobile()) {
      publisher
        ? publisher.addEventListener("wheel", (event) =>
            this.scrollHandler(event)
          )
        : null;
      advertiser
        ? advertiser.addEventListener("wheel", (event) =>
            this.scrollHandler(event)
          )
        : null;
      form
        ? form.addEventListener("wheel", (event) => this.scrollHandler(event))
        : null;
    } else {
      publisher
        ? publisher.addEventListener("touchmove", (event) =>
            this.touchHandler(event)
          )
        : null;
      advertiser
        ? advertiser.addEventListener("touchmove", (event) =>
            this.touchHandler(event)
          )
        : null;
      form
        ? form.addEventListener("touchmove", (event) =>
            this.touchHandler(event)
          )
        : null;
    }
  },
  destroy: function () {
    var publisher = document.querySelector(".publisher"),
      advertiser = document.querySelector(".adpage"),
      form = document.querySelector(".signup-form");
    if (!this.isMobile()) {
      publisher
        ? publisher.removeEventListener("wheel", (event) =>
            this.scrollHandler(event)
          )
        : null;
      advertiser
        ? advertiser.removeEventListener("wheel", (event) =>
            this.scrollHandler(event)
          )
        : null;
      form
        ? form.removeEventListener("wheel", (event) =>
            this.scrollHandler(event)
          )
        : null;
    } else {
      publisher
        ? publisher.removeEventListener("touchmove", (event) =>
            this.touchHandler(event)
          )
        : null;
      advertiser
        ? advertiser.removeEventListener("touchmove", (event) =>
            this.touchHandler(event)
          )
        : null;
      form
        ? form.removeEventListener("touchmove", (event) =>
            this.touchHandler(event)
          )
        : null;
    }
  },
  methods: {
    touchHandler: function (event) {
      var count = 0;
      if (count == 0) {
        setTimeout(() => {
          if (event.touches[0].screenY > 0) {
            this.incrementStep();
          } else if (event.touches[0].screenY < 0) {
            this.decrementStep();
          }
        }, 400);
        count++;
      }
    },
    scrollHandler: function (event) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (event.deltaY > 0) {
          this.incrementStep();
        } else if (event.deltaY < 0) {
          this.decrementStep();
        }
      }, 400);
    },
    returnToPage: function () {
      switch (this.type) {
        case "advertiser":
          router.push({ name: "Advertiser", params: { currentStep: 2 } });
          break;
        case "publisher":
          router.push({ name: "Publisher", params: { currentStep: 2 } });
          break;
        default:
          break;
      }
    },
    incrementStep: function () {
      if (this.isMobile()) {
        switch (this.currentStep) {
          case 1:
            this.currentStep = 1.5;
            break;
          case 1.5:
            this.currentStep = 2;
            break;
          default:
            this.currentStep++;
            break;
        }
      } else {
        if (this.currentStep != 3) {
          this.currentStep++;
        }
      }
    },
    decrementStep: function () {
      if (this.isMobile()) {
        switch (this.currentStep) {
          case 3:
            this.returnToPage();
            break;
          case 2:
            this.currentStep = 1.5;
            break;
          case 1.5:
            this.currentStep = 1;
            break;
          case 1:
            router.push("/");
            break;
          default:
            this.currentStep--;
            break;
        }
      } else {
        switch (this.currentStep) {
          case 3:
            this.returnToPage();
            break;
          case 1:
            router.push("/");
            break;
          default:
            this.currentStep--;
            break;
        }
      }
    },
  },
  computed: {
    barWidth: function () {
      switch (this.currentStep) {
        case 1:
          return "33%";
        case 1.5:
          return "33%";
        case 2:
          return "66%";
        case 3:
          return "100%";
        default:
          return "0";
      }
    },
  },
  watch: {
    currentStep: function () {
      this.$emit("change", this.currentStep);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/grid";

.progress-bar {
  &__wrap {
    @extend .container-fluid;
    position: relative;
  }

  &__bar {
    width: calc(100% - 55px);
    height: 4px;
    margin: auto;
    background-color: rgba(#fff, 0.3);
    position: relative;
    z-index: 10;
    border-radius: 4px;

    @include media-breakpoint-down(sm) {
      width: 75%;
    }
  }

  &__progress {
    width: 0;
    transition: 1s;
    height: 4px;
    background-color: #9f132c;
    position: absolute;
  }

  &__step {
    position: absolute;
    font-size: 12px;
    top: -25px;
    color: #fff;

    &--1 {
      left: 32%;
    }

    &--2 {
      left: 65%;
    }

    &--3 {
      left: 98%;
    }
  }

  &__btn {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0px;
    bottom: 0;
    margin: auto;
    z-index: 10;
    background-color: #9f132c;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @include media-breakpoint-down(md) {
      width: 45px;
      height: 45px;
    }

    svg path {
      fill-opacity: 1;
      opacity: 1;
    }

    &--prev {
      left: rem(35px);
    }

    &--next {
      right: rem(35px);
    }

    &:disabled {
      background-color: transparent;

      svg path {
        fill-opacity: 0.01;
        opacity: 0.5;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>