<template>
  <main
    class="signup-form"
    :style="{ minHeight: this.FixWebkitHeightBug + 'px' }"
  >
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

            <template v-if="currentType == 'publisher'">
              <div class="row" :style="submitted">
                <div class="col-md-6">
                  <FormGroup
                    id="name"
                    label="Name*"
                    :required="true"
                    :maxlength="30"
                    v-model="form.publisher.name"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="email"
                    label="Email"
                    type="email"
                    :required="true"
                    :maxlength="30"
                    v-model="form.publisher.email"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="pw"
                    label="Password*"
                    type="password"
                    :required="true"
                    :minlength="8"
                    :maxlength="30"
                    v-model="form.publisher.pw"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="repeat_pw"
                    label="Repeat Password*"
                    type="password"
                    :required="true"
                    :minlength="8"
                    :maxlength="30"
                    v-model="form.publisher.repeatPW"
                    :currentPw="form.publisher.pw"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="skype"
                    label="Skype"
                    :maxlength="30"
                    v-model="form.publisher.skype"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="tg"
                    label="Telegram"
                    :minlength="5"
                    :maxlength="30"
                    v-model="form.publisher.tg"
                  />
                </div>
                <div class="col-12">
                  <FormGroup
                    id="message"
                    type="textarea"
                    :maxlength="300"
                    label="Additional info"
                    v-model="form.publisher.message"
                  />
                </div>
              </div>

              <div class="signup-form__footer" :style="submitted">
                <FormGroupCheckbox
                  id="policy"
                  v-model="form.publisher.policy"
                  :required="true"
                />
                <button
                  class="form__btn"
                  :disabled="disabled_publisher"
                  @click.prevent="submitForm('publisher')"
                >
                  Register
                </button>
              </div>
            </template>

            <template v-if="currentType == 'advertiser'">
              <div class="row" :style="submitted">
                <div class="col-md-6">
                  <FormGroup
                    id="company"
                    label="Company*"
                    :required="true"
                    :maxlength="30"
                    v-model="form.advertiser.company"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="email"
                    label="Email*"
                    type="email"
                    :required="true"
                    :maxlength="30"
                    v-model="form.advertiser.email"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="site"
                    label="Site*"
                    :required="true"
                    :maxlength="30"
                    v-model="form.advertiser.site"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="country"
                    label="Country (GEO)"
                    :required="true"
                    :maxlength="30"
                    v-model="form.advertiser.country"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup id="skype" label="Skype" :maxlength="30" />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    id="tg"
                    label="Telegram"
                    :minlength="5"
                    :maxlength="30"
                    v-model="form.advertiser.tg"
                  />
                </div>
                <div class="col-12">
                  <FormGroup
                    id="message"
                    type="textarea"
                    :maxlength="300"
                    v-model="form.advertiser.message"
                    label="Additional info"
                  />
                </div>
              </div>
              <div class="signup-form__footer" :style="submitted">
                <FormGroupCheckbox
                  id="policy"
                  :required="true"
                  v-model="form.advertiser.policy"
                />
                <button
                  class="form__btn"
                  @click.prevent="submitForm('advertiser')"
                  :disabled="disabled_advertiser"
                >
                  Submit
                </button>
              </div>
            </template>

            <template v-if="success == true">
              <div class="signup-form__success">
                {{ successMessage }}

                <div class="signup-form__succes-list success-list">
                  <ul class="success-list__list">
                    <li class="success-list__item">
                      <a
                        href="mailto:partners@akamuro.com"
                        class="success-list__link"
                      >
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.8462 8.07688C13.8462 8.36018 13.7608 8.62282 13.624 8.8539L9.2522 4.28857L13.5766 0.757336C13.7448 1.0065 13.8462 1.29918 13.8462 1.61546V8.07688ZM6.92309 5.1175L12.9404 0.203537C12.6934 0.0773716 12.4154 0 12.1154 0H1.73076C1.43044 0 1.1523 0.0773716 0.906372 0.203537L6.92309 5.1175ZM8.60066 4.82021L7.20783 5.95839C7.12636 6.02463 7.02491 6.05771 6.92309 6.05771C6.82122 6.05771 6.71977 6.02463 6.6383 5.95839L5.24515 4.82016L0.818052 9.44384C1.08341 9.59922 1.3944 9.69231 1.73073 9.69231H12.1154C12.4517 9.69231 12.7628 9.59922 13.0281 9.44384L8.60066 4.82021ZM0.269611 0.75731C0.101418 1.00647 0 1.29915 0 1.61546V8.07691C0 8.36021 0.0849813 8.62285 0.22227 8.85392L4.59355 4.2878L0.269611 0.75731Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>
                        partners@akamuro.com (Web questions)
                      </a>
                    </li>

                    <li class="success-list__item">
                      <a
                        href="skype:.cid.dc1db02d7400ae62? chat"
                        class="success-list__link"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5975 8.48575C13.699 8.02987 13.7515 7.55737 13.7515 7.07263C13.7515 3.437 10.7625 0.489125 7.07438 0.489125C6.68587 0.489125 6.30438 0.522375 5.9325 0.585375C5.33575 0.21525 4.62963 0 3.87275 0C1.73338 0 0 1.70887 0 3.8185C0 4.52287 0.19425 5.18175 0.532 5.74963C0.443625 6.17663 0.396375 6.61938 0.396375 7.07263C0.396375 10.7091 3.38625 13.657 7.0735 13.657C7.49175 13.657 7.90038 13.6185 8.29675 13.5468C8.84275 13.8355 9.46575 14 10.1281 14C12.2666 14 14 12.2902 14 10.1824C14 9.5725 13.8547 8.99763 13.5975 8.48575ZM10.4991 10.2191C10.1902 10.6505 9.73438 10.9918 9.142 11.2333C8.55663 11.4739 7.85575 11.5964 7.056 11.5964C6.097 11.5964 5.29287 11.4301 4.66462 11.1011C4.21575 10.8623 3.8465 10.5394 3.56562 10.1386C3.28125 9.73612 3.13862 9.33625 3.13862 8.9495C3.13862 8.70887 3.23225 8.49975 3.41687 8.32913C3.59975 8.1585 3.83425 8.07363 4.11425 8.07363C4.3435 8.07363 4.54125 8.141 4.70225 8.27487C4.85538 8.4035 4.9875 8.59425 5.09338 8.83838C5.2115 9.10612 5.34013 9.33187 5.47575 9.50775C5.60787 9.68013 5.796 9.82362 6.03662 9.9365C6.279 10.0485 6.60537 10.1071 7.00612 10.1071C7.55825 10.1071 8.0115 9.99075 8.351 9.7615C8.68437 9.53837 8.84538 9.26888 8.84538 8.93987C8.84538 8.68087 8.7605 8.47612 8.58812 8.316C8.40613 8.148 8.16638 8.01763 7.87588 7.9275C7.57225 7.83475 7.16012 7.73325 6.65088 7.62825C5.957 7.48213 5.36812 7.30888 4.90088 7.112C4.42225 6.91075 4.0355 6.6325 3.75375 6.28425C3.46675 5.92988 3.3215 5.48625 3.3215 4.96475C3.3215 4.46775 3.47375 4.01975 3.77475 3.633C4.07312 3.24887 4.50887 2.94875 5.0715 2.74487C5.62537 2.54275 6.28425 2.44038 7.03062 2.44038C7.6265 2.44038 8.15063 2.50863 8.589 2.64337C9.02913 2.77812 9.40013 2.96013 9.6915 3.185C9.9855 3.4125 10.2042 3.65312 10.3407 3.90512C10.479 4.15887 10.5499 4.41175 10.5499 4.65588C10.5499 4.89125 10.458 5.10563 10.276 5.29112C10.0923 5.47925 9.86125 5.57375 9.59 5.57375C9.34325 5.57375 9.149 5.51338 9.01513 5.397C8.89 5.28763 8.75963 5.117 8.61613 4.87375C8.44987 4.56225 8.24775 4.31638 8.01675 4.14225C7.79187 3.97338 7.41738 3.88938 6.90112 3.88938C6.42338 3.88938 6.03312 3.98388 5.74438 4.17113C5.46613 4.3505 5.3305 4.557 5.3305 4.802C5.3305 4.95162 5.37425 5.07675 5.46438 5.18438C5.55888 5.29988 5.69275 5.39875 5.8625 5.48275C6.0375 5.56938 6.21863 5.63937 6.39975 5.68837C6.58525 5.73912 6.89587 5.81525 7.32375 5.91237C7.8645 6.02612 8.36063 6.15475 8.79988 6.29387C9.24525 6.433 9.6285 6.60538 9.9435 6.8075C10.2629 7.01313 10.5157 7.27563 10.696 7.59063C10.8763 7.90825 10.9673 8.29763 10.9673 8.75088C10.9664 9.2925 10.8089 9.78687 10.4991 10.2191Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>

                        live:.cid.dc1db02d7400ae62
                      </a>
                    </li>

                    <li class="success-list__item">
                      <a href="https://t.me/akamuro" class="success-list__link">
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.27827 8.78775L6.0136 12.5105C6.39227 12.5105 6.55628 12.3478 6.75295 12.1525L8.52832 10.4558L12.2071 13.1499C12.8818 13.5259 13.3571 13.3279 13.5391 12.5292L15.9538 1.21423C16.1678 0.216877 15.5938 -0.173799 14.9365 0.0708735L0.742803 5.505C-0.225887 5.88101 -0.21122 6.42103 0.578132 6.6657L4.20689 7.79439L12.6358 2.52027C13.0324 2.25759 13.3931 2.40293 13.0964 2.6656L6.27827 8.78775Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>

                        @akamuro
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
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
import axios from "axios";
import { formType } from "@/global/registerFormType.js";

export default {
  components: {
    FormGroup,
    ProgressBar,
    FormGroupCheckbox,
  },
  data() {
    return {
      success: false,
      successMessage: "",
      currentType: this.type,
      form: {
        advertiser: {
          company: null,
          email: null,
          skype: null,
          site: null,
          tg: null,
          country: null,
          message: null,
          policy: false,
        },
        publisher: {
          name: null,
          email: null,
          skype: null,
          pw: null,
          repeatPW: null,
          tg: null,
          message: null,
          policy: false,
        },
      },
    };
  },
  props: {
    type: {
      type: String,
      default: "advertiser",
    },
  },
  computed: {
    disabled_publisher() {
      var values = this.form.publisher;
      var invalid = true;
      console.log(values);

      if (
        values.name &&
        values.email &&
        values.pw &&
        values.repeatPW &&
        values.policy
      ) {
        invalid = false;
      }

      return invalid;
    },
    disabled_advertiser() {
      var values = this.form.advertiser;
      var invalid = true;

      if (values.company && values.email && values.site && values.policy) {
        invalid = false;
      }

      return invalid;
    },
    submitted() {
      return {
        opacity: this.success ? 0 : 1,
      };
    },
  },
  methods: {
    changeType(type) {
      this.currentType = type;
      formType.$emit("typeChanged", type);
    },
    submitForm(type) {
      var data = new FormData();
      var message;

      if (type == "advertiser") {
        let form = this.form.advertiser;
        data.append("form_type", "Advertiser");
        Object.entries(form).forEach(([key, value]) => {
          if (value && key != "policy") {
            data.append(`form_data[${key}]`, value);
          }
        });

        message = "Thanks for the offer! we will contact you shortly";
      } else if (type == "publisher") {
        let form = this.form.publisher;
        data.append("form_type", "Publisher");
        Object.entries(form).forEach(([key, value]) => {
          if (value && key != "policy") {
            data.append(`form_data[${key}]`, value);
          }
        });

        message = "Thanks for registering! Account will be activated soon";
      }

      axios
        .post("/backend/process_reg.php", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.success = true;
          this.successMessage = message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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

    @include media-breakpoint-down(lg) {
      padding-top: rem(30px);
    }

    @include media-breakpoint-down(md) {
      padding-bottom: rem(70px);
      min-height: 100vh;
      height: auto;
    }

    @include media-breakpoint-down(sm) {
      padding-top: rem(65px);
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
    left: 50%;
    z-index: 2;
    transform: scale(1.9);

    @media (max-width: 1550px) {
      left: 55%;
    }

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
      &::after {
        clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%);
      }

      &:disabled {
        filter: grayscale(1);
        cursor: not-allowed;
      }

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

  &__success {
    max-width: 500px;
    margin: auto;
    min-height: 500px;
    position: absolute;
    left: 0;
    top: 30%;
    right: 0;
    color: #fff;
  }

  &__success-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: rem(40px);

    @media (max-width: 598px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0;
    }
  }
}
.success-list {
  &__list {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: rem(20px);
  }

  &__item {
    margin-bottom: rem(12px);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    color: rgba(255, 255, 255, 0.8);

    svg {
      margin-right: rem(16px);
    }

    &:hover {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }
}

.type-switcher {
  &__group {
    &:nth-of-type(odd) {
      /*       .offer-switcher__label {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%);

        &::after {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%);
        }
      } */
    }

    &:nth-of-type(even) {
      /*       .offer-switcher__label {
        clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%, 90% 100%);

        &::after {
          clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%, 90% 100%);
        }
      } */
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
        /*         font-weight: 600; */
        transition: 250ms;

        &::after {
          /* background: #102743; */
          opacity: 1;
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
    /* background: rgba(#fff, 0.5); */
    letter-spacing: 0.05em;
    transition: 250ms;
    font-size: rem(14px);

    @include media-breakpoint-down(md) {
      padding: rem(14px 22px);
      font-size: rem(12px);
      text-align: center;
    }

    /*     &::after {
      content: "";
      left: 1px;
      top: 1px;
      height: calc(100% - 2px);
      width: calc(100% - 2px);
      position: absolute;
      background: #000;
      z-index: -1;
    } */

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background: linear-gradient(to right, #9f132c 2px, transparent 2px) 0 0,
        linear-gradient(to right, #9f132c 2px, transparent 2px) 0 100%,
        linear-gradient(to left, #9f132c 2px, transparent 2px) 100% 0,
        linear-gradient(to left, #9f132c 2px, transparent 2px) 100% 100%,
        linear-gradient(to bottom, #9f132c 2px, transparent 2px) 0 0,
        linear-gradient(to bottom, #9f132c 2px, transparent 2px) 100% 0,
        linear-gradient(to top, #9f132c 2px, transparent 2px) 0 100%,
        linear-gradient(to top, #9f132c 2px, transparent 2px) 100% 100%;
      background-size: 7px 7px;
      transition: 750ms;
      background-repeat: no-repeat;
      opacity: 0;
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