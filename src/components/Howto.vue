<template>
  <div class="how-to__content container-fluid h-100">
    <h1 class="how-to__heading">
      {{ title }}
    </h1>
    <div class="how-to__steps-wrap">
      <ul class="how-to__steps">
        <li class="how-to__step" v-for="(listItem, key) in list" :key="key">
          <div class="how-to__step-number">0{{ key + 1 }}</div>
          <div class="how-to__step-description" v-html="listItem.text"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowTo",
  data: function () {
    return {
      steps: false,
      rendered: null,
    };
  },
  props: {
    title: {
      type: String,
      default: "How to",
    },
    list: {
      type: Array || Object,
      reqired: true,
    },
  },
  mounted: function () {
    if (this.isMobile() || this.isTablet()) {
      setTimeout(() => {
        document
          .querySelector(".how-to__heading")
          .classList.add("how-to__heading--slide-in");
      }, 1000);
    } else {
      setTimeout(() => {
        document
          .querySelector(".how-to__heading")
          .classList.add("how-to__heading--slide-in");
      }, 1750);
    }
  },
  updated: function () {
    var heading = document.querySelector(".how-to__heading");
    if (heading != null)
      if (this.isMobile() || this.isTablet()) {
        setTimeout(() => {
          heading.classList.add("how-to__heading--slide-in");
        }, 1000);
      } else {
        setTimeout(() => {
          heading.classList.add("how-to__heading--slide-in");
        }, 1750);
      }
  },
  beforeDestroy: function () {
    var heading = document.querySelector(".how-to__heading");
    if (heading != null) heading.classList.remove("how-to__heading--slide-in");
    heading.classList.add("how-to__heading--slide-out");
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/grid";

@keyframes slide {
  from {
    transform: translateX(-100vw);
    opacity: 0;
  }

  to {
    transform: none;
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideItemLeft {
  from {
    transform: translateX(-50vw);
    opacity: 0;
  }

  to {
    transform: none;
    opacity: 1;
  }
}

@keyframes slideItemRight {
  from {
    transform: translateX(50vw);
    opacity: 0;
  }

  to {
    transform: none;
    opacity: 1;
  }
}

.how-to {
  &__heading {
    font-size: rem(40px);
    color: #fff;
    max-width: 390px;
    line-height: rem(48px);
    opacity: 0;
    transform: translateX(-50vw);
    transition-duration: 2s;
    transition-timing-function: ease-out;

    position: absolute;
    top: -80px;
    bottom: 0;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      font-size: rem(60px);
      margin-top: 0;
      line-height: 1.4;
      max-width: 70%;
      transition-duration: 1s;
      position: static;
    }

    @include media-breakpoint-down(sm) {
      font-size: rem(26px);
      max-width: 260px;
      line-height: rem(32px);
    }

    &--slide-in {
      transform: translateX(0);
      opacity: 1;
      transition-duration: 1.25s;
      transition-timing-function: ease-out;

      @include media-breakpoint-down(md) {
        transition-duration: 1s;
      }
    }

    &--slide-out {
      transform: translateX(0);
      opacity: 0;
      transition-duration: 1.25s;
      transition-timing-function: ease-out;

      @include media-breakpoint-down(md) {
        transition-duration: 1s;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__steps-wrap {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.19) 35%,
      rgba(0, 0, 0, 0.62) 100%
    );
    padding: rem(40px 45px);
    padding-bottom: rem(110px);
    z-index: 1;
    animation: slide 1.25s ease-out 750ms;
    animation-fill-mode: forwards;
    opacity: 0;

    @include media-breakpoint-down(md) {
      animation: fade 1s ease-out 1s;
      animation-fill-mode: forwards;
      padding: 0;
      padding-left: rem(40px);
      padding-bottom: rem(100px);
      background: transparent;
      top: 30vh;
      bottom: unset;
    }

    @include media-breakpoint-down(sm) {
      padding-left: rem(20px);
      padding-bottom: rem(80px);
    }

    &::before {
      content: "";
      background: #fff;
      height: 4px;
      width: 98%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;

      @include media-breakpoint-down(md) {
        width: 4px;
        height: 100%;
        right: unset;
        left: 74px;
        background: linear-gradient(
          180deg,
          #ffffff 0.01%,
          rgba(255, 255, 255, 0) 75%
        );
      }

      @include media-breakpoint-down(sm) {
        left: 24px;
      }
    }
  }

  &__steps {
    @extend .container-fluid;
    margin: auto;
    list-style: none;
    padding: 0 !important;
    display: flex;
    color: #fff;

    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__step {
    margin: 0 auto;
    position: relative;
    opacity: 0;

    @media (max-width: 1500px) {
      margin: rem(0 20px);
    }

    @include media-breakpoint-down(lg) {
      margin: rem(0 5px);
    }

    @include media-breakpoint-down(md) {
      padding-left: rem(30px);
      display: flex;
      margin: 0;
      margin-bottom: 32px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      top: -45px;
      transform: rotate(-45deg);
      background: #ffffff;
      box-shadow: 0px 0px 4px #fabc32, 0px 0px 12px #fabc32;

      @include media-breakpoint-down(md) {
        top: 10px;
        left: 0;
        box-shadow: 0px 0px 4px #32a3ce, 0px 0px 12px #32a3ce;
      }
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &:nth-of-type(3) {
      margin-left: auto;
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      animation: slideItemLeft 1.5s ease-out 1750ms;
      animation-fill-mode: forwards;
      &::before {
        left: 3px;

        @include media-breakpoint-down(xs) {
          left: 0;
        }
      }

      @include media-breakpoint-down(md) {
        animation: slideItemLeft 1s ease-out 0s;
        animation-fill-mode: forwards;
      }
    }

    &:nth-of-type(3),
    &:nth-of-type(4) {
      text-align: right;
      animation: slideItemRight 1.5s ease-out 1750ms;
      animation-fill-mode: forwards;

      @include media-breakpoint-down(md) {
        animation: slideItemLeft 1s ease-out 0s;
        animation-fill-mode: forwards;
        text-align: left;
        margin-left: 0;
      }

      &::before {
        right: 3px;

        @include media-breakpoint-down(xs) {
          left: 0;
        }
      }
    }

    &-number {
      font-size: rem(20px);
      font-family: "Oswald", sans-serif;
      margin-bottom: rem(18px);
      line-height: 1;

      @include media-breakpoint-down(md) {
        font-size: rem(40px);
        margin: 0;
        margin-right: 15px;
      }

      @include media-breakpoint-down(sm) {
        font-size: rem(16px);
      }
    }

    &-description {
      max-width: 200px;
      line-height: rem(18px);

      @include media-breakpoint-only(md) {
        font-size: rem(20px);
        line-height: 1.3;
      }
    }
  }
}
</style>