<template>
  <main class="signup-form h-100">
    <div class="signup-form__wrap">
      <transition name="formfade">
        <div class="signup-form__bg" key="publisher" v-if="type == 'publisher'">
          <img src="@/assets/img/bg/publisher-form.jpg" alt="" />
        </div>
        <div
          class="signup-form__bg"
          key="advertiser"
          v-if="type == 'advertiser'"
        >
          <img src="@/assets/img/bg/advertiser-form.jpg" alt="" />
        </div>
      </transition>

      <div class="container-fluid">
        <div class="signup-form__content">
          <form class="signup-form__form form">
            <div class="signup-form__header">
              <h1 class="signup-form__heading">Registration</h1>

              <div class="signup-form__type-switcher type-switcher">
                <div class="type-switcher__group">
                  <input
                    id="publisher"
                    type="radio"
                    name="type"
                    value="publisher"
                    class="type-switcher__control"
                    :checked="currentType == 'publisher'"
                    @change="changeType($event.target.value)"
                  />
                  <label
                    for="publisher"
                    class="type-switcher__label type-switcher__label--publisher"
                  >
                    Publisher
                  </label>
                </div>
                <div class="type-switcher__group">
                  <input
                    id="advertiser"
                    type="radio"
                    name="type"
                    value="advertiser"
                    class="type-switcher__control"
                    :checked="currentType == 'advertiser'"
                    @change="changeType($event.target.value)"
                  />
                  <label
                    for="advertiser"
                    class="type-switcher__label type-switcher__label--advertiser"
                  >
                    Advertiser
                  </label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <FormGroup id="advert" label="Advert Mame *" :required="true" />
              </div>
              <div class="col-md-6">
                <FormGroup id="cat" label="Category " />
              </div>
              <div class="col-md-6">
                <FormGroup id="site" label="Site" />
              </div>
              <div class="col-md-6">
                <FormGroup id="name" label="Personal Name" />
              </div>
              <div class="col-md-6">
                <FormGroup id="tel" label="Phone" />
              </div>
              <div class="col-md-6">
                <FormGroup id="position" label="Position" />
              </div>
              <div class="col-12">
                <FormGroup id="message" label="Additional comments" />
              </div>
            </div>

            <div class="signup-form__footer">
              <FormGroupCheckbox
                id="policy"
              />
              <button class="form__btn">Submit</button>
            </div>
          </form>

          <transition name="formfade">
            <div
              class="signup-form__samurai"
              v-if="currentType == 'advertiser'"
              key="advertiser"
            >
              <img
                src="@/assets/img/samurai-advertiser.png"
                alt=""
                class="signup-form__samurai-person"
              />
              <img
                src="@/assets/img/fireball.png"
                alt=""
                class="signup-form__samurai-object"
              />
            </div>

            <div
              class="signup-form__samurai"
              v-else-if="currentType == 'publisher'"
              key="publisher"
            >
              <img
                src="@/assets/img/samurai-publisher.png"
                alt=""
                class="signup-form__samurai-person"
              />
              <img
                src="@/assets/img/holocron.png"
                alt=""
                class="signup-form__samurai-object"
              />
            </div>
          </transition>

          <div
            class="signup-form__progress-bar progress-bar"
            v-if="!isMobile()"
          >
            <ProgressBar :step="3" :type="currentType" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FormGroup from "@/components/FormGroup";
import FormGroupCheckbox from "@/components/FormGroupCheckbox";
import ProgressBar from "@/components/ProgressBar";
import { formType } from "@/global/registerFormType.js";

export default {
  components: {
    FormGroup,
    ProgressBar,
    FormGroupCheckbox,
  },
  data() {
    return {
      currentType: this.type
    }
  },
  props: {
    type: {
      type: String,
      default: "advertiser",
    },
  },
  methods: {
    changeType(type) {
      this.currentType = type;
      formType.$emit("typeChanged", type);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

@keyframes rotate {
  from {
    transform: scale(0.35) rotate(-55deg);
  }

  to {
    transform: scale(0.35) rotate(0);
  }
}

.signup-form {
  &__wrap {
    padding-top: rem(65px);
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      padding-bottom: rem(70px);
      min-height: 100vh;
      height: auto;
    }
  }

  &__progress-bar {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    z-index: 100;
    transition: 1s;

    @include media-breakpoint-down(md) {
      bottom: 60px;
    }

    @include media-breakpoint-down(sm) {
      width: 50%;
      margin: 0;
      bottom: 60px;
    }
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }

  &__samurai {
    height: 100vh;
    width: max-content;
    margin: auto;
    transform-origin: top;
    position: absolute;
    top: -70px;
    right: 50px;
    z-index: 2;
    transform: scale(1.9);

    @include media-breakpoint-down(md) {
      display: none;
    }

    img {
      width: auto;
      height: 100%;
    }

    &-object {
      position: absolute;
      left: -21%;
      top: -12%;
      transform: scale(0.35) rotate(-55deg);
      transform-origin: center;
      animation: rotate 2.5s ease-in-out 1.5s infinite;
      animation-direction: alternate;
    }
  }

  &__content {
    max-width: 650px;
    display: flex;
    align-items: center;
    margin-top: -40px;

    @include media-breakpoint-down(md) {
      margin-top: 0;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      flex-direction: column;
      margin-bottom: rem(22px);
      align-items: flex-start;
    }
  }

  &__heading {
    font-size: rem(48px);
    color: #fff;
    margin-bottom: 0;

    @include media-breakpoint-down(md) {
      font-size: rem(26px);
      margin-bottom: rem(14px);
    }
  }

  &__type-switcher {
    display: flex;
    align-items: center;
    margin-left: auto;

    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }

  &__form {
    position: relative;
    z-index: 10;
    .form__btn {
      @extend %btn-accent;
      padding: rem(12px 55px);
      margin-left: auto;

      @include media-breakpoint-down(md) {
        margin-left: 0;
        margin-top: rem(50px);
      }
    }
  }

  &__footer {
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      flex-direction: column;
      align-items: flex-start;
    }

    .form__group {
      margin-bottom: 0;
    }
  }
}

.type-switcher {
  &__group {
    &:nth-of-type(odd) {
      .type-switcher__label {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%);

        &::after {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%);
        }
      }
    }

    &:nth-of-type(even) {
      .type-switcher__label {
        clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%, 90% 100%);

        &::after {
          clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%, 90% 100%);
        }
      }
    }
  }

  &__control {
    appearance: none;
    position: absolute;
    z-index: -999;
    opacity: 0;

    &:checked {
      ~ .type-switcher__label {
        color: #fff;
        font-weight: 600;
        transition: 250ms;

        &--advertiser {
          &::after {
            background-color: #593324;
          }
        }

        &--publisher {
          &::after {
            background-color: #102743;
          }
        }
      }
    }
  }

  &__label {
    cursor: pointer;
    color: rgba(#fff, 0.5);
    text-transform: uppercase;
    padding: rem(13px 36px);
    position: relative;
    background: rgba(#fff, 0.5);
    letter-spacing: 0.05em;
    transition: 250ms;

    @include media-breakpoint-down(md) {
      padding: rem(8px 25px);
    }

    &::after {
      content: "";
      left: 1px;
      top: 1px;
      height: calc(100% - 2px);
      width: calc(100% - 2px);
      position: absolute;
      background: #000;
      z-index: -1;
    }
  }
}

.formfade-enter-active,
.formfade-leave-active {
  transition: opacity 750ms;
}
.formfade-enter,
.formfade-leave-to {
  opacity: 0;
}
</style>