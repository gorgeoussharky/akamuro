<template>
  <main class="publisher h-100">
    <div
      class="publisher__wrap h-100"
      :class="zoomed ? 'publisher__wrap--zoomed' : null"
    >
      <div class="container publisher__container h-100">
        <div
          class="publisher__samurai"
          :class="zoomed ? 'publisher__samurai--zoomed' : null"
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
            v-if="step == 1"
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

        <div class="publisher__progress-bar progress-bar">
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
      step: this.currentStep
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
        router.push({ name: "Registration", params: { type: "publisher" } });
      }
    },
  },
  methods: {
    log: function (event) {
      console.log(event);
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
@import "~sass-rem/rem";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/grid";

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

  &__wrap {
    position: relative;
    padding: rem(80px 0);

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
      z-index: -1;
      filter: grayscale(0.85) sepia(0.1);
    }

    &--zoomed {
      &::before {
        background-size: 150%;
        transition: 2s;
        filter: none;
      }
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
    left: 0;
    right: 0;
    z-index: 2;

    &--zoomed {
      transform: scale(1.7);
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
      animation: rotate 1.3s ease-in-out 1.5s;
      animation-fill-mode: forwards;
    }
  }

  &__advantages {
    opacity: 0;
    transition: 2s;
    z-index: 100;
    width: 100%;
    margin: auto;

    &::after {
      content: "";
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      position: absolute;
      transition: 2s;
      opacity: 0;
      z-index: -1;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.6) 15%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.6) 85%
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
      width: 100vw;
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