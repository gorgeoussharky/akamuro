<template>
  <main class="page h-100">
    <div class="container page__container">
      <article class="page__wrap">
        <h1 class="page__heading">{{ title }}</h1>

        <div class="page__content" v-html="content"></div>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Lorem Ipsum",
    },
    content: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "~sass-rem/rem";
@import "~@/assets/scss/base";

.page {
  &__container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__wrap {
    max-width: 935px;
    border: 1px solid #3c3c3c;
    border-radius: rem(15px);
    margin: auto;
    height: 77%;
    overflow-y: scroll;
    padding: rem(55px 100px);

    &::-webkit-scrollbar {
      width: 10px;      
    }
    &::-webkit-scrollbar-thumb {
      background-color: #3A3A3A;
      border-radius: 14px;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #1B1B1B;
      border-radius: 0px 14px 14px 0px;
    }
  }

  &__heading {
    font-size: rem(26px);
    margin-bottom: rem(30px);
    color: #ffffff;

    &::after {
      content: '';
      width: 50%;
      background: linear-gradient(89.99deg, #FFFFFF 0.01%, rgba(255, 255, 255, 0) 67.35%);
      display: block;
      height: 3px;
      margin-top: rem(30px);
    }
  }

  &__content {
    color: rgba(255, 255, 255, 0.7);

    h2 {
      color: #ffffff;
      text-shadow: 0px 0px 18px #000000;
      font-size: rem(18px);
      margin-bottom: rem(22px);
      margin-top: rem(30px);
      font-family: MyriadPro;
      text-transform: uppercase;
    }

    p {
      margin-bottom: rem(20px);
    }
  }
}
</style>