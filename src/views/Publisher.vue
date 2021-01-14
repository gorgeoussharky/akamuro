<template>
  <main class="publisher h-100">
    <div class="publisher__wrap h-100" :class="wrapClasses">
      <div class="publisher__container h-100">
        <div class="publisher__samurai" :class="samuraiClasses">
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
            <HowTo title="How to become Akamuro Publisher" :list="steps" />
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
      advantages: [
        {
          title: "Fast payouts",
          description: "Выплаты по запросу от 2 раз в месяц",
        },
        {
          title: "Wide target audience",
          description:
            "Любой пол от 21 до 55 лет с минимальным уровнем зарплаты",
        },
        {
          title: "Flexible hold terms",
          description: "Постоянные партнеры могут выводить деньги быстрее ",
        },
        {
          title: "Stable demand",
          description:
            "Финансовая тематика наименее чувствительна к сезонности и кризису",
        },
        {
          title: "Expert support",
          description: "Опыт работы нашей команды более 10 лет",
        },
        {
          title: "White theme",
          description:
            "Простая модерация и возможность работы с крупными площадками",
        },
        {
          title: "Individual conditions",
          description: "Каждый вебмастер имеет возможность зарабатывать больше",
        },
        {
          title: "Low competition",
          description: "Отсутствие высокой конкуренции",
        },
      ],
      steps: [
        {
          text: "Иметь понимание с каким источником трафика работать",
        },
        {
          text: "Зарегистрироваться в Akamuro affiliate network",
        },
        {
          text: "Выбрать наиболее интересный оффер",
        },
        {
          text: "Приводить качественный трафик и получать самый лучший профит",
        },
      ],
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
      }, 3400);
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
      bottom: 60px;
    }
  }

  &__wrap {
    position: relative;
    padding: rem(80px 0);
    min-height: 100vh;

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
    transition: 2s;
    position: absolute;
    top: 0;
    left: 50px;
    right: 0;
    z-index: 2;

    @include media-breakpoint-down(md) {
      left: 0;
    }

    &--zoomed {
      transform: scale(1.7);
      transition: 2s;

      @include media-breakpoint-down(sm) {
        transform: scale(1.3) translateX(-33%);
      }
    }

    &--hidden {
      opacity: 0;
      transition: 2s;
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

    @include media-breakpoint-down(sm) {
      left: -20px;
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

    @media (min-width: 1440px) {
      bottom: 60px;
    }

    @include media-breakpoint-only(md) {
      bottom: 110px;
    }

    &::after {
      content: "";
      left: 0;
      top: 0;
      width: 100%;
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
        transition: 2s;
        transition-delay: 2.5s;
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
  transition: opacity 2.5s;
}
.sectionFade-enter,
.sectionFade-leave-to {
  opacity: 0;
}
</style>