<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/" class="header__logo"> Akamuro </router-link>

        <transition name="fade">
          <nav class="header__header-menu header-menu" v-show="showMobileMenu">
            <ul class="header-menu__list">
              <li class="header-menu__item">
                <router-link
                  to="/advertiser"
                  active-class="header-menu__link--active"
                  class="header-menu__link"
                >
                  Advertiser
                </router-link>
              </li>
              <li class="header-menu__item">
                <router-link
                  to="/publisher"
                  active-class="header-menu__link--active"
                  class="header-menu__link"
                >
                  Publisher
                </router-link>
              </li>
              <li class="header-menu__item">
                <router-link
                  to="/about-us"
                  active-class="header-menu__link--active"
                  class="header-menu__link"
                >
                  About us
                </router-link>
              </li>
            </ul>

            <div class="header__sign-in" v-if="isMobile()">
              <a href="" class="header__link">Sign In Advertiser</a>
            </div>

            <div class="header__sign-up" v-if="isMobile()">
              <button
                href="/register"
                class="header__link"
                :class="page == 'Registration' ? 'header__link--active' : null"
                @click="toForm()"
              >
                Registration
              </button>
            </div>
          </nav>
        </transition>

        <button
          class="header__toggler"
          v-if="isMobile()"
          :class="showMobileMenu ? 'header__toggler--active' : null"
          @click="showMobileMenu = !showMobileMenu"
        >
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="20"
              y2="1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="1"
              y1="8"
              x2="20"
              y2="8"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="12"
              y1="15"
              x2="20"
              y2="15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <transition name="formfade">
          <div class="header__sign-in" v-if="isAdvertiseForm && !isMobile()">
            <a href="" class="header__link">Sign In</a>
          </div>
        </transition>

        <div class="header__sign-up" v-if="!isMobile()">
          <button
            href="/register"
            class="header__link"
            :class="page == 'Registration' ? 'header__link--active' : null"
            @click="toForm()"
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { formType } from "@/global/registerFormType.js";
import router from "@/router/index";

export default {
  name: "Header",
  props: ["page"],
  data() {
    return {
      isAdvertiseForm: false,
      showMobileMenu: true,
    };
  },
  methods: {
    toForm: function () {
      formType.$emit("typeChanged", "advertiser");
      router.push({ name: "Registration", params: { type: "advertiser" } });
    },
  },
  mounted() {
    formType.$on("typeChanged", (type) => {
      if (type == "advertiser") {
        this.isAdvertiseForm = true;
      } else {
        this.isAdvertiseForm = false;
      }
    });
    if (this.isMobile()) this.showMobileMenu = false;
  },
  watch: {
    page: function (val) {
      if (val != "Registration") {
        this.isAdvertiseForm = false;
      }
    },
    $route() {
      if (this.isMobile()) this.showMobileMenu = false;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.header {
  padding: rem(10px 0);
  padding-bottom: rem(20px);
  position: absolute;
  width: 100%;
  z-index: 20;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.94) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 598px) {
    position: fixed;
    top: 0;
    left: 0;
  }

  &__wrap {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__logo {
    font-family: "Oswald", sans-serif;
    font-size: rem(20px);
    color: #fff;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  &__header-menu {
    margin: auto;

    @include media-breakpoint-down(sm) {
      display: flex;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #000;
      transition: 350ms;
    }
  }

  &__link {
    color: #fff;
    position: relative;
    padding: rem(7px 10px);

    @include media-breakpoint-down(sm) {
      font-size: rem(18px);
      color: rgba(#fff, 0.8);
      padding: rem(7px 32px);
      margin-bottom: rem(35px);
      display: block;
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

    &--active {
      &::after {
        opacity: 1;
        transition: 750ms;
      }
    }

    &:hover {
      text-decoration: none;
      color: #fff;
    }
  }

  &__sign-in {
    position: absolute;
    right: 150px;

    @include media-breakpoint-down(md) {
      right: 100px;
    }

    @include media-breakpoint-down(sm) {
      position: static;
    }
  }

  &__toggler {
    margin-left: auto;
    z-index: 10;

    svg line {
      transform-origin: center;
      transition: 350ms;
    }

    &--active {
      svg line {
        &:nth-of-type(1) {
          transform: rotate(-45deg) translate(0px, 7px);
        }

        &:nth-of-type(2) {
          transform: rotate(45deg);
        }

        &:nth-of-type(3) {
          opacity: 0;
        }
      }
    }
  }
}

.header-menu {
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;

    @media (max-width: 598px) {
      flex-direction: column;
    }
  }

  &__item {
    margin: rem(0 10px);

    @media (max-width: 598px) {
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
}
</style>