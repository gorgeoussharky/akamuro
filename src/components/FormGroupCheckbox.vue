<template>
  <div class="form__group form__group--checkbox">
    <input type="checkbox" class="form__control" :name="id" :id="id" />
    <label :for="id" class="form__label" v-html="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "FormGroupCheckbox",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~sass-rem/rem";

.form {
  &__group {
    margin-bottom: 0;

    &--checkbox {
      .form__control {
        appearance: none;
        position: absolute;
        z-index: -999;
        opacity: 0;

        &:checked {
          ~ .form__label {
            &::after {
              opacity: 1;
              transition: 250ms;
            }
          }
        }
      }

      .form__label {
        position: relative;
        color: rgba(255, 255, 255, 0.9);
        padding-left: rem(50px);
        cursor: pointer;
        margin: 0;

        &::before {
          content: "";
          position: absolute;
          width: rem(27px);
          height: rem(27px);
          background: #9f132c;
          border-radius: 5px;
          top: 0;
          left: 0;
        }

        &::after {
          content: "";
          background-image: url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4.66667L5.21429 8L11 2' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
          background-size: contain;
          background-position: center;
          width: rem(13px);
          height: rem(10px);
          top: 8px;
          left: 7px;
          position: absolute;
          opacity: 0;
          transition: 250ms;
        }
      }
    }
  }
}
</style>