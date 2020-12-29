<template>
  <transition name="noticeFade">
    <div class="notice" v-if="show">
      <div class="notice__wrap">
        <div class="notice__text" v-html="text"></div>
        <button class="notice__btn" @click="show = false">Accept</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notice",
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
  },
  data: function () {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss">
@import "~sass-rem/rem";
@import "~@/assets/scss/base";

.notice {
  z-index: 100;
  &__wrap {
    padding: rem(18px);
    background-color: rgba(#000, 0.77);
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: max-content;
    margin: auto;
    position: absolute;
    top: 60px;
    z-index: 100;
    left: 0;
    right: 0;
  }

  &__text {
    font-size: rem(14px);
    color: #fff;
  }

  &__btn {
    @extend %btn-accent;
    font-size: 12px;
    margin-left: rem(30px);
  }
}

.noticeFade-enter-active,
.noticeFade-leave-active {
  transition: opacity 1s;
}
.noticeFade-enter,
.noticeFade-leave-to {
  opacity: 0;
}
</style>