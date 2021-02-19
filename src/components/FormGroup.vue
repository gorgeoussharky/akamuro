<template>
  <div class="form__group">
    <label :for="id" class="form__label">{{ label }}</label>
    <input
      v-if="type != 'textarea'"
      :type="type"
      class="form__control"
      :name="id"
      :id="id"
      :placeholder="label"
      :maxlength="maxlength"
      :minlength="minlength"
      @input="[(inputValue = $event.target.value), checkInput(id)]"
    />
    <textarea
      v-else
      :type="type"
      class="form__control"
      :name="id"
      :id="id"
      :placeholder="label"
      :maxlength="maxlength"
      :minlength="minlength"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <div class="form__error" v-show="error">
      {{ notice }}
    </div>
  </div>
</template> 

<script>
export default {
  name: "FormGroup",
  data() {
    return {
      error: false,
      notice: "",
      inputValue: null,
    };
  },
  props: {
    value: {
      default: null,
    },
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
    maxlength: {
      type: Number,
      default: 0,
    },
    minlength: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    checkInput(name) {
      var value = this.inputValue;
      if (value.length > 2) {
        switch (name) {
          case "name":
            if (value.match(/[а-яА-ЯЁё0-9]/i)) {
              this.error = true;
              this.notice = "Only A-Z letters";
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          case "email":
            if (!value.match(/[@.]/i)) {
              this.error = true;
              this.notice = "Please enter correct email";
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          case "pw":
            if (!value.match(/^[0-9a-zA-Z]+$/)) {
              this.error = true;
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          case "repeat_pw":
            if (!value.match(/^[0-9a-zA-Z]+$/)) {
              this.error = true;
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          case "tg":
            if (!value.match(/^[0-9a-zA-Z_]+$/)) {
              this.error = true;
              this.notice = "Please enter correct Telegram account";
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          case "company":
            if (!value.match(/^[0-9a-zA-Zа-яА-ЯЁё]+$/)) {
              this.error = true;
              this.notice = "Please enter correct company name";
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          case "site":
            if (!value.match(/^[a-zA-Zа-я.:/]+$/)) {
              this.error = true;
              this.notice = "Please enter correct site url";
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          case "country":
            if (!value.match(/^[0-9a-zA-Z_]+$/)) {
              this.error = true;
              this.notice = "Please enter correct site url";
            } else {
              this.error = false;
              this.$emit("input", value);
            }
            break;

          default: {
            this.error = false;
            this.$emit("input", value);
          }
        }
      } else {
        this.error = false;
        this.$emit("input", null);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";

.form {
  &__group {
    position: relative;
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
    }

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

    @include media-breakpoint-down(md) {
      padding: rem(12px 16px);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  &__error {
    position: absolute;
    left: 0;
    bottom: -30px;
    color: #fff;
    font-size: 12px;
  }
}
</style>