<template>
  <div class="modal">
    <div class="modal__wrap">
      <button class="modal__close" @click="$emit('closed')">
        <span aria-hidden="true"
          ><svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L19 19M2 19L19 2"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      <div class="modal__heading">LOG IN</div>
      <form class="modal__form form">
        <FormGroup id="email_pw" label="Email" />
        <FormGroup id="pw_login" label="Password" />
        <button class="form__btn">LOG IN</button>
      </form>
    </div>
  </div>
</template>

<script>
import FormGroup from "@/components/FormGroup";
export default {
  components: { FormGroup },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: rgba(#000, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &__wrap {
    background: #000000;
    box-shadow: 0px 0px 12px rgba(50, 163, 206, 0.58),
      0px 0px 66px rgba(50, 163, 206, 0.54);
    border-radius: 25px;
    padding: rem(52px);
    max-width: 460px;
    position: relative;
    width: 100%;

    @include media-breakpoint-down(sm) {
      height: 100%;
      padding: rem(22px);
      border-radius: 0;
      box-shadow: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__close {
    position: absolute;
    top: 25px;
    right: 25px;
  }

  &__heading {
    margin-bottom: rem(28px);
    font-size: rem(26px);
    color: #fff;
  }

  .form__btn {
    @extend %btn-accent;
    padding: rem(12px 55px);

    @include media-breakpoint-down(md) {
      margin-left: 0;
      margin-top: rem(50px);
    }
  }
}
</style>