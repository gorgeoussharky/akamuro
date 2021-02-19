<i18n>
{
  "en": {
    "advantages": [
        {
          "title": "New webmasters",
          "description": "Each network can lead to 15% of unique webmasters"
        },
        {
          "title": "New clients",
          "description": "Webmasters attract new users to your product"
        },
        {
          "title": "Lack of risks",
          "description": "Our clients pay only for targeted actions"
        },
        {
          "title": "Legal traffic source",
          "description": "Webmasters use only effective traffic sources"
        },
        {
          "title": "Expert support",
          "description": "Our team has over 10 years of experience"
        },
        {
          "title": "No fraud",
          "description": "We carefully check the quality of the traffic provided"
        },
        {
          "title": "Fast start",
          "description": "Integration to our system takes approximately 30 minutes"
        },
        {
          "title": "Volume scaling",
          "description": "There is always an opportunity to receive even more high-quality traffic"
        }
      ],
      "steps": [
        {
          "text": "Working in the financial segment - banks and microfinance organizations"
        },
        {
          "text": "Create a description and conditions of the offer"
        },
        {
          "text": "Send a request to: <a href='mailto:offers@akamuro.com'>offers@akamuro.com</a>"
        },
        {
          "text": "Start getting clients and pay only for the result"
        }
      ],
      "advantagesTitle": "How to become Akamuro Advertiser"
  },
  "vn": {
    "advantages": [
        {
          "title": "Publisher mới",
          "description": "Mỗi mạng có thể dẫn đến 15% quản trị viên web duy nhất"
        },
        {
          "title": "Khách hàng mới",
          "description": "Publisher thu hút người dùng mới đến với sản phẩm của bạn"
        },
        {
          "title": "Không có rủi ro",
          "description": "Khách hàng của chúng tôi chỉ trả tiền cho các hành động được nhắm mục tiêu"
        },
        {
          "title": "Nguồn lưu lượng hợp pháp",
          "description": "Publisher chỉ sử dụng các nguồn lưu lượng có hiệu quả"
        },
        {
          "title": "Hỗ trợ cao cấp",
          "description": "Đội ngũ của chúng tôi có hơn 10 năm kinh nghiệm"
        },
        {
          "title": "Không có fraud",
          "description": "Chúng tôi kiểm tra cẩn thận chất lượng traffic được cung cấp từ các publisher"
        },
        {
          "title": "Tích hợp nhanh",
          "description": "Tích hợp vào hệ thống của chúng tôi mất khoảng 30 phút"
        },
        {
          "title": "Tăng âm lượng lead",
          "description": "Luôn nhận được nhiều traffic chất lượng cao"
        }
      ],
      "steps": [
        {
          "text": "Làm việc trong mảng tài chính - ngân hàng và các công ty tài chín"
        },
        {
          "text": "Tạo điều kiện và đề nghị hợp tác"
        },
        {
          "text": "Gửi yêu cầu tới: <a href='mailto:offers@akamuro.com'>offers@akamuro.com</a>"
        },
        {
          "text": "Bắt đầu nhận khách hàng và chỉ thanh toán theo kết quả"
        }
      ],
      "advantagesTitle": "Cách trở thành Advertiser"
  }
}
</i18n>

<template>
  <main class="adpage">
    <div
      class="adpage__wrap"
      :class="wrapClasses"
      :style="{ height: this.FixWebkitHeightBug + 'px' }"
    >
      <div class="adpage__container h-100">
        <div
          class="adpage__samurai"
          :class="samuraiClasses"
          :style="{ height: this.FixWebkitHeightBug + 'px' }"
        >
          <img
            src="@/assets/img/samurai-advertiser.png"
            alt=""
            class="adpage__samurai-person"
          />
          <img
            src="@/assets/img/fireball.png"
            alt=""
            class="adpage__samurai-object"
          />
        </div>

        <transition name="sectionFade">
          <div
            v-if="step == 1 || step == 1.5"
            class="adpage__advantages advantages"
            :class="!zoomed ? 'adpage__advantages--visible' : null"
          >
            <Advantages :list="advantages" />
          </div>
        </transition>

        <transition name="sectionFade">
          <div class="adpage__how-to how-to h-100" v-if="step == 2">
            <HowTo :title="$t('advantagesTitle')" :list="steps" />
          </div>
        </transition>

        <div
          class="adpage__progress-bar progress-bar"
          :style="step == 1.5 ? 'transform : translateX(100%)' : null"
        >
          <ProgressBar v-model="step" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Advantages from "@/components/Advantages";
import ProgressBar from "@/components/ProgressBar";
import HowTo from "@/components/Howto";
import router from "@/router/index";
import { formType } from "@/global/registerFormType.js";

export default {
  data() {
    return {
      zoomed: true,
      step: this.currentStep,
    };
  },
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    if (this.step == 1) {
      setTimeout(() => {
        this.zoomed = false;
      }, 1400);
    } else {
      this.zoomed = false;
    }
  },
  watch: {
    step: function (val) {
      if (val == 3) {
        formType.$emit("typeChanged", "advertiser");
        router.push({ name: "Registration", params: { type: "advertiser" } });
      }
    },
  },
  computed: {
    advantages() {
      return this.$i18n.messages[this.$i18n.locale].advantages;
    },
    steps() {
      return this.$i18n.messages[this.$i18n.locale].steps;
    },
    wrapClasses: function () {
      return {
        "adpage__wrap--zoomed": this.zoomed,
        "adpage__wrap--shifted": this.step == 1.5,
      };
    },
    samuraiClasses: function () {
      return {
        "adpage__samurai--zoomed": this.zoomed,
        "adpage__samurai--hidden":
          (this.isMobile() && this.step == 2) ||
          (this.isTablet() && this.step == 2),
        "adpage__samurai--shifted": this.step == 1.5,
      };
    },
  },
  components: {
    ProgressBar,
    Advantages,
    HowTo,
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

.adpage {
  &__container {
    display: flex;
    flex-direction: column;
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
      bottom: 50px;
    }
  }

  &__wrap {
    position: relative;
    padding: rem(80px 0);
    height: 100vh;

    @include media-breakpoint-down(sm) {
      width: 200%;
      transition: 1s;
    }

    &::before {
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url("~@/assets/img/bg/advertiser-bg.jpg");
      background-size: 100%;
      transition: 2s;
      transform-origin: center;
      background-position: center;
      background-size: cover;
      z-index: -1;
      filter: grayscale(0.85) sepia(0.1);
      transform: none;

      @include media-breakpoint-down(md) {
        background-position: right;
        filter: none;
      }
    }

    &--zoomed {
      &::before {
        transition: 2s;
        filter: none;
        transform: scale(1.4);

        @include media-breakpoint-down(md) {
          transform: none;
        }
      }
    }

    &--shifted {
      transform: translateX(-50%);
      transition: 1s;
    }
  }

  &__samurai {
    height: 100vh;
    width: max-content;
    margin: auto;
    transform-origin: top;
    transform: none;
    transition: 2s transform, 500ms left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    @include media-breakpoint-down(xs) {
      left: -25px;
    }

    &--zoomed {
      transform: scale(1.7);
      transition: 2s;

      @include media-breakpoint-down(sm) {
        transform: scale(1.3) translateX(-43vw);
        left: 0;
      }
    }

    &--hidden {
      opacity: 0;
      transition: 2s;
    }

    &--shifted {
      left: -15px;
      transition: 500ms;
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

  &__advantages {
    opacity: 0;
    transition: 2s;
    z-index: 100;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transform: translateX(-20px);

    @media (min-width: 1440px) {
      bottom: 60px;
    }

    @include media-breakpoint-only(md) {
      bottom: 110px;
    }

    @include media-breakpoint-down(md) {
      transform: none;
    }

    @include media-breakpoint-down(xs) {
      bottom: -30px;
    }

    &::after {
      content: "";
      left: 0;
      top: 0;
      width: calc(100% + 20px);
      height: 100vh;
      position: absolute;
      transition: 2s;
      opacity: 0;
      z-index: -1;
      /*       background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.6) 15%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.6) 85%
      ); */
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.65) 35%,
        rgba(0, 0, 0, 0) 55%,
        rgba(0, 0, 0, 0.65) 70%
      );

      @include media-breakpoint-down(md) {
        width: 100%;
      }

      @include media-breakpoint-down(xs) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.65) 27.5%,
          rgba(0, 0, 0, 0) 45%,
          rgba(0, 0, 0, 0.65) 85%
        );
      }
    }

    &--visible {
      opacity: 1;
      transition: 2s;

      &::after {
        opacity: 1;
        transition: 2s;
      }

      .advantages__bg rect {
        transform: scale(1);
        transition: 1.75s;
        transition-delay: 2s;
      }
    }
  }

  &__how-to {
    &::after {
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      position: absolute;
      transition: 2s;
      opacity: 1;
      z-index: -1;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.5) 25%,
        rgba(0, 0, 0, 0) 100%
      );

      @include media-breakpoint-down(md) {
        background: rgba(0, 0, 0, 0.8);
        transition: 1s;
      }
    }
  }
}

.sectionFade-enter-active,
.sectionFade-leave-active {
  transition: opacity 1.5s;
}
.sectionFade-enter,
.sectionFade-leave-to {
  opacity: 0;
}
</style>