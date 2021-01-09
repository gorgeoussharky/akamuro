<template>
  <main class="signup-form h-100">
    <div class="signup-form__wrap h-100">
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

      <div class="container h-100">
        <div class="signup-form__content h-100">
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
                    :checked="type == 'publisher'"
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
                    :checked="type == 'advertiser'"
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
                label='Terms and conditions / <a href="">Privacy policy</a>'
              />
              <button class="form__btn">Submit</button>
            </div>
          </form>

          <transition name="formfade">
            <div
              class="signup-form__samurai"
              v-if="type == 'advertiser'"
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
              v-else-if="type == 'publisher'"
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

          <div class="signup-form__progress-bar progress-bar">
            <ProgressBar :step="3" :type="type" />
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
  props: {
    type: {
      type: String,
      default: "advertiser",
    },
  },
  methods: {
    changeType(type) {
      this.type = type;
      formType.$emit("typeChanged", type);
    },
  },
};
</script>

<style lang="scss">
@import "~sass-rem/rem";
@import "~@/assets/scss/base";

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
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: rem(32px);
  }

  &__heading {
    font-size: rem(48px);
    color: #fff;
    margin-bottom: 0;
  }

  &__type-switcher {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__form {
    position: relative;
    z-index: 10;
    .form__btn {
      @extend %btn-accent;
      padding: rem(12px 55px);
      margin-left: auto;
    }
  }

  &__footer {
    display: flex;
    align-items: center;

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