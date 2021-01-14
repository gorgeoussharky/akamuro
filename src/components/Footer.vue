<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer__wrap">
        <div class="footer__title">Akamuro network</div>
        <div class="footer__copyright">Copyright 2020</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "~@/assets/scss/variables";

.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  z-index: 10;

  &__wrap {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: space-between;
  }

  &__copyright {
      text-transform: uppercase;
  }
}
</style>