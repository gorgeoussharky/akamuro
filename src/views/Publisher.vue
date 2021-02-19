<i18n>
{
  "en": {
    "advantages": [
        {
          "title": "Fast payouts",
          "description": "Payments on request from 2 times a month"
        },
        {
          "title": "Wide target audience",
          "description": "Any gender from 21 to 55 years old with the minimum wage"
        },
        {
          "title": "Flexible hold terms",
          "description": "Regular partners can withdraw money faster"
        },
        {
          "title": "Stable demand",
          "description": "Offers least sensitive to the crisis"
        },
        {
          "title": "Expert support",
          "description": "Experience of our team over 10 years"
        },
        {
          "title": "Legal advertising",
          "description": "Easy moderation and the ability to work with large platforms"
        },
        {
          "title": "Individual conditions",
          "description": "Every webmaster has the opportunity to earn more"
        },
        {
          "title": "A relatively young market",
          "description": "Lack of high competition"
        }
      ],
      "steps": [
        {
          "text": "Have an understanding with which traffic source to work"
        },
        {
          "text": "Register with the Akamuro Affiliate Network"
        },
        {
          "text": "Choose the most interesting offer"
        },
        {
          "text": "Drive high-quality traffic and get the best profit"
        }
      ],
      "advantagesTitle": "How to become Akamuro Publisher"
  },
  "vn": {
    "advantages": [
        {
          "title": "Thanh toán nhanh",
          "description": "Thanh toán theo yêu cầu từ 2 lần một tháng"
        },
        {
          "title": "Đối tượng mục tiêu rộng",
          "description": "Mọi giới từ 21 đến 55 tuổi với mức lương tối thiểu"
        },
        {
          "title": "Duyệt nhanh",
          "description": "Sau khi được duyệt bạn có thể gửi yêu câu Pay cho AM và nhận tiền luôn"
        },
        {
          "title": "Chương trình giới thiệu 5%",
          "description": "Hãy mời publisher khác kiếm tiền cùng Akamuro và nhận thêm 5% hoa hồng"
        },
        {
          "title": "Hỗ trợ cao cấp",
          "description": "Kinh nghiệm team của chúng tôi hơn 10 năm"
        },
        {
          "title": "Nhiều lựa chọn offer",
          "description": "Bạn có thể chọn offer hợp lý theo traffic của bạn"
        },
        {
          "title": "Điều kiện cá nhân",
          "description": "Publisher có cơ hội kiếm tiền nhiều hơn"
        },
        {
          "title": "%CVR - cao",
          "description": "Phần trăm cvr <br> có thể đến 20%"
        }
      ],
      "steps": [
        {
          "text": "Hiểu rõ về nguồn lưu lượng truy cập"
        },
        {
          "text": "Đăng ký vào Akamuro"
        },
        {
          "text": "Chọn offer thú vị nhất"
        },
        {
          "text": "Đổ traffic có chất lượng và nhận hoa hồng"
        }
      ],
      "advantagesTitle": "Cách trở thành Publisher"
  }
}
</i18n>

<template>
  <main class="publisher h-100">
    <div
      class="publisher__wrap h-100"
      :class="wrapClasses"
      :style="{ height: this.FixWebkitHeightBug + 'px' }"
    >
      <div class="publisher__container h-100">
        <div
          class="publisher__samurai"
          :class="samuraiClasses"
          :style="{ height: this.FixWebkitHeightBug + 'px' }"
        >
          <img
            src="@/assets/img/samurai-publisher.png"
            alt=""
            class="publisher__samurai-person"
          />
          <img
            src="@/assets/img/holocron.png"
            alt=""
            class="publisher__samurai-object"
          />
        </div>

        <transition name="sectionFade">
          <div
            v-if="step == 1 || step == 1.5"
            class="publisher__advantages advantages"
            :class="!zoomed ? 'publisher__advantages--visible' : null"
          >
            <Advantages :list="advantages" />
          </div>
        </transition>

        <transition name="sectionFade">
          <div class="publisher__how-to how-to h-100" v-if="step == 2">
            <HowTo :title="$t('advantagesTitle')" :list="steps" />
          </div>
        </transition>

        <div
          class="publisher__progress-bar progress-bar"
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
        formType.$emit("typeChanged", "publisher");
        router.push({ name: "Registration", params: { type: "publisher" } });
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
        "publisher__wrap--zoomed": this.zoomed,
        "publisher__wrap--shifted": this.step == 1.5,
      };
    },
    samuraiClasses: function () {
      return {
        "publisher__samurai--zoomed": this.zoomed,
        "publisher__samurai--hidden":
          (this.isMobile() && this.step == 2) ||
          (this.isTablet() && this.step == 2),
        "publisher__samurai--shifted": this.step == 1.5,
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

.publisher {
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
      background-image: url("~@/assets/img/bg/publisher-bg.jpg");
      background-size: 100%;
      transition: 2s;
      transform-origin: center;
      background-position: center;
      background-size: cover;
      z-index: -1;
      filter: grayscale(0.85) sepia(0.1);
      transform: none;

      @include media-breakpoint-down(md) {
        filter: none;
      }
    }

    &--zoomed {
      &::before {
        transform: scale(1.4);
        transition: 2s;
        filter: none;

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
    bottom: -10px;
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