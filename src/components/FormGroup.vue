<template>
  <div class="form__group">
    <label :for="id" class="form__label">{{ label }}</label>
    <input
      type="text"
      class="form__control"
      :name="id"
      :id="id"
      :placeholder="label"
    />
  </div>
</template> 

<script>
export default {
  name: "FormGroup",
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
    position: relative;
    margin-bottom: rem(42px);

    &::before {
      content: "";
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      width: 2px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 2px;
    }

    &::after {
      content: "";
      background: linear-gradient(
        275deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.7) 100%
      );
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 2px;
    }
  }

  &__label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &__control {
    background-color: transparent;
    padding: rem(16px);
    border: none;
    width: 100%;
    color: rgba(255, 255, 255, 0.9);

    &::placeholder {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}
</style>