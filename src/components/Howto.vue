<template>
  <div class="how-to__content h-100">
    <h1 class="how-to__heading">{{ title }}</h1>
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
};
</script>

<style lang="scss">
@import "~sass-rem/rem";
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
  &__steps-wrap {
    animation: slide 2s ease-out 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  &__heading {
    font-size: rem(40px);
    color: #fff;
    max-width: 390px;
    line-height: rem(48px);
    margin-top: rem(-100px);
    opacity: 0;
    animation: slideItemLeft 1.5s ease-out 5s;
    animation-fill-mode: forwards;
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
    padding: rem(40px);
    padding-bottom: rem(110px);
    z-index: 1;

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
    }
  }

  &__steps {
    @extend .container;
    margin: auto;
    list-style: none;
    padding: 0;
    display: flex;
    color: #fff;
  }

  &__step {
    margin: rem(0 20px);
    position: relative;
    opacity: 0;

    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      top: -45px;
      transform: rotate(-45deg);
      background: #ffffff;
      box-shadow: 0px 0px 4px #fabc32, 0px 0px 12px #fabc32;
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
      animation: slideItemLeft 1.5s ease-out 5s;
      animation-fill-mode: forwards;
      &::before {
        left: 0;
      }
    }

    &:nth-of-type(3),
    &:nth-of-type(4) {
      text-align: right;
      animation: slideItemRight 1.5s ease-out 5s;
      animation-fill-mode: forwards;

      &::before {
        right: 0;
      }
    }

    &-number {
      font-size: rem(20px);
      font-family: "Oswald", sans-serif;
      margin-bottom: rem(18px);
    }

    &-description {
      max-width: 215px;
    }
  }
}
</style>