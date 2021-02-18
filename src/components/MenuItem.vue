<template>
  <li
    class="header-menu__item"
    :class="parent ? 'header-menu__item--parent' : null"
    @mouseover="showDropdown = true"
    @mouseout="showDropdown = false"
  >
    <router-link
      :to="link"
      active-class="header-menu__link--active"
      class="header-menu__link"
    >
      {{ label }}
    </router-link>

    <template v-if="parent">
      <ul
        class="header-menu__sub-list"
        v-show="isMobile() ? true : showDropdown"
      >
        <li
          class="header-menu__sub-item"
          v-for="sublink in sublinks"
          :key="sublink.label"
        >
          <router-link
            :to="sublink.link"
            active-class="header-menu__sub-linke"
            class="header-menu__sub-link"
          >
            {{ sublink.label }}
          </router-link>
        </li>
      </ul>
    </template>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    parent: {
      type: Boolean,
      default: false,
    },
    sublinks: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.header-menu {
  &__item {
    margin: rem(0 10px);
    position: relative;

    @include media-breakpoint-down(xs) {
      margin: 0;
      margin-bottom: rem(35px);
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__link {
    color: rgba(#fff, 0.8);
    font-size: rem(14px);
    padding: rem(7px 32px);
    position: relative;
    transition: 250ms;
    background: transparent;
    display: block;

    @include media-breakpoint-down(md) {
      padding: rem(7px 22px);
    }

    @include media-breakpoint-down(sm) {
      font-size: rem(18px);
    }

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

    &:hover {
      color: #fff;
      text-decoration: none;
    }

    &--active {
      &::after {
        opacity: 1;
        transition: 750ms;
      }
    }
  }

  &__sub {
    &-list {
      list-style: none;
      width: 100%;
      margin-left: rem(32px);
      padding: 0;
      position: absolute;
      top: 100%;
      left: 0;
      background: rgba(0, 0, 0, 0.55);
      border-top: 1px solid $accent;

      @include media-breakpoint-down(md) {
        position: static;
        margin-left: 0;
        text-align: center;
        border: none;
        background: transparent;
      }
    }

    &-item {
      padding: rem(8px);

      @include media-breakpoint-down(md) {
          margin-top: rem(28px);
      }
    }

    &-link {
      color: rgba(255, 255, 255, 0.71);
      font-size: rem(12px);

      @include media-breakpoint-down(md) {
        color: rgba(#fff, 0.8);
        font-size: rem(18px);
      }

      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>