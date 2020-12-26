<template>
  <main class="advertiser h-100">
    <div
      class="advertiser__wrap h-100"
      :class="zoomed ? 'advertiser__wrap--zoomed' : null"
    >
      <div class="container h-100">
        <div
          class="advertiser__samurai"
          :class="zoomed ? 'advertiser__samurai--zoomed' : null"
        >
          <img
            src="@/assets/img/samurai-advertiser.png"
            alt=""
            class="advertiser__samurai-person"
          />
          <img
            src="@/assets/img/fireball.png"
            alt=""
            class="advertiser__samurai-object"
          />
        </div>

        <div class="advertiser__advantages advantages h-100">
          <ul class="advantages__list h-100">
            <li class="advantages__item">
              <h2 class="advantages__item-title">New webmasters</h2>
              <p class="advantages__item-description">
                Каждая сеть способна привести до 15% уникальных вебмастеров
              </p>
            </li>

            <li class="advantages__item">
              <h2 class="advantages__item-title">New clients</h2>
              <p class="advantages__item-description">
                Вебмастера приводят новых пользователей на ваш продукт
              </p>
            </li>

            <li class="advantages__item">
              <h2 class="advantages__item-title">Lack of risks</h2>
              <p class="advantages__item-description">
                Наши клиенты платят только за целевые действия
              </p>
            </li>

            <li class="advantages__item">
              <h2 class="advantages__item-title">White traffic sources</h2>
              <p class="advantages__item-description">
                Вебмастера используют только эффективные источники трафика
              </p>
            </li>

            <li class="advantages__item">
              <h2 class="advantages__item-title">Expert support</h2>
              <p class="advantages__item-description">
                Опыт работы нашей команды более 10 лет
              </p>
            </li>

            <li class="advantages__item">
              <h2 class="advantages__item-title">No fraud</h2>
              <p class="advantages__item-description">
                Мы внимательно проверяем качество предоставляемого трафика
              </p>
            </li>

            <li class="advantages__item">
              <h2 class="advantages__item-title">Fast start</h2>
              <p class="advantages__item-description">
                Интеграция к нашей системой занимает примерно 30 минут
              </p>
            </li>

            <li class="advantages__item">
              <h2 class="advantages__item-title">Scaling volumes</h2>
              <p class="advantages__item-description">
                Всегда есть возможность получать ещё больше качественного
                трафика
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      zoomed: true,
    };
  },
  props: {},
  mounted() {
    setTimeout(() => {
      this.zoomed = false;
    }, 3400);
  },
};
</script>

<style lang="scss">
@import "~sass-rem/rem";

@keyframes rotate {
  from {
    transform: scale(0.35) rotate(-55deg);
  }

  to {
    transform: scale(0.35) rotate(0);
  }
}

.advertiser {
  &__wrap {
    position: relative;
    padding-top: rem(80px);

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
      z-index: -1;
      filter: grayscale(0.85) sepia(0.1);
    }

    &::after {
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 2s;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }

    &--zoomed {
      &::before {
        background-size: 150%;
        transition: 2s;
        filter: none;
      }

      &::after {
        opacity: 0;
        transition: 2s;
      }
    }
  }

  &__samurai {
    height: 100vh;
    width: max-content;
    margin: auto;
    transform-origin: top;
    position: relative;
    transform: none;
    transition: 2s;
    position: absolute;
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
      left: -95px;
      top: -85px;
      transform: scale(0.35);
      transform-origin: center;
      animation: rotate 1.3s ease-in-out 1.5s;
    }
  }

  &__advatages {
    height: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.advantages {
  &__list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #fff;
    z-index: 10;
    position: relative;
    margin: 0;
    height: 100%;
    display: none;
  }

  &__item {
    &:nth-of-type(even) {
      text-align: right;

      .advantages__item-description {
        margin-left: auto;
      }
    }

    &-title {
      margin-bottom: rem(20px);
    }

    &-description {
      font-size: rem(14px);
      opacity: 0.8;
      max-width: 285px;
    }
  }
}
</style>