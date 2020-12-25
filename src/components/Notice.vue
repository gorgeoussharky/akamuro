<template>
  <transition name="fade">
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
  &__wrap {
    padding: rem(18px);
    background-color: rgba(#000, 0.77);
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: max-content;
    margin: auto;
  }

  &__text {
    font-size: rem(14px);
    color: #fff;
  }

  &__btn {
    @extend %btn-accent;
    margin-left: rem(30px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>