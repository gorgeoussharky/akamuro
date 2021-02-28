

<template>
  <div class="container-xl container-fluid advantages__container">
    <div class="advantages__wrap">
      <div class="advantages__bg">
        <svg
          width="1110"
          height="425"
          viewBox="0 0 1110 423"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1110"
            height="423"
          >
            <path d="M0 1H354.713L552 122" stroke="white" stroke-width="2" />
            <path
              d="M0 141H354.556L551.5 122"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M0 281H354.314L551.5 123"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M0 422H354.314L552 122.5"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M1109.5 1H754.787L551.5 121.5"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M1109.5 141H754.944L552 123"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M1109.5 281H755.186L552 122.5"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M1109.5 422H755.186L551.5 121.5"
              stroke="white"
              stroke-width="2"
            />
          </mask>
          <g mask="url(#mask0)">
            <rect
              x="-1"
              y="-21"
              width="1110"
              height="508"
              fill="url(#paint0_radial)"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(554 135) rotate(90) scale(352 769.134)"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="#C4C4C4" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <template>
        <ul class="advantages__list">
          <li
            class="advantages__item"
            :key="key"
            v-for="(listItem, key) in list"
          >
            <h2 class="advantages__item-title">{{ listItem.title }}</h2>
            <p
              class="advantages__item-description"
              v-html="listItem.description"
            ></p>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantages",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.advantages {
  &__container {
    width: 100%;
    padding: rem(0 45px);
    max-width: 1140px;
  }

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
    grid-row-gap: rem(50px);
    padding-top: rem(15px);
    width: 100%;
    margin: auto;
    height: 530px;

    @include media-breakpoint-down(md) {
      height: 407px;
      padding-top: 0;
      grid-row-gap: 18px;
      transform: translateY(-5px);
    }

    @include media-breakpoint-down(sm) {
      height: auto;
    }
  }

  &__wrap {
    position: relative;
    overflow: hidden;
  }

  &__bg {
    position: absolute;
    top: 52px;
    left: 0px;

    @include media-breakpoint-down(md) {
      top: 25px;
      left: -180px;

      svg {
        height: 350px;
      }
    }

    @include media-breakpoint-down(xs) {
      left: -205px;

      svg {
        height: 285px;
      }
    }

    @media (max-width: 420px) {
      left: -165px;
    }

    @media (max-width: 385px) {
      left: -205px;
    }

    rect {
      transform: scale(0.05);
      transition: 1.75s;
      transform-origin: center -20px;
      transition-timing-function: ease-in-out;
    }
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

      @include media-breakpoint-down(md) {
        margin-bottom: rem(8px);
      }
    }

    &-description {
      font-size: rem(14px);
      opacity: 0.8;
      margin-bottom: 0;
      max-width: 235px;

      @include media-breakpoint-down(md) {
        max-width: 170px;
      }

      @include media-breakpoint-down(sm) {
        max-width: 200px;
      }

      @include media-breakpoint-down(xs) {
        max-width: 240px;
      }
    }
  }
}
</style>