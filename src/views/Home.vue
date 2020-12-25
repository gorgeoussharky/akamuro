<template>
  <main class="frontpage">
    <div class="frontpage__wrap">
      <div class="container">
        <Notice
          text="This website uses <a href=''>cookies</a> and google adwords to ensure you receive the best experience"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Notice from "@/components/Notice.vue";

export default {
  name: "Home",
  components: {
    Notice,
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

}
</style>