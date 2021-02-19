<i18n>
{
  "en": {
    "publisher": "Publisher",
    "advertiser": "Advertiser",
    "offers": "Offers",
    "aboutus": "About us",
    "signin": "Log In",
    "registration": "Registration"
  },
  "vn":  {
    "publisher": "Nhà xuất bản",
    "advertiser": "Nhà quảng cáo",
    "offers": "Đối tác",
    "aboutus": "Về chúng tô",
    "signin": "Đăng nhập",
    "registration": "Đăng ký"
  }
}
</i18n>

<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__wrap">
        <router-link to="/" class="header__logo"> Akamuro </router-link>

        <transition name="menuFade">
          <nav
            class="header__header-menu header-menu"
            v-show="isMobileBig() ? showMobileMenu : true"
            :class="pageTransition ? 'header__header-menu--transition' : null"
          >
            <ul class="header-menu__list">
              <MenuItem link="/publisher" :label="$t('publisher')" />

              <MenuItem link="/advertiser" :label="$t('advertiser')" />

              <MenuItem link="/offer" :label="$t('offers')" />

              <MenuItem link="/about-us" :label="$t('aboutus')" />
            </ul>

            <div class="header__sign-in" v-if="isMobile()">
              <button class="header__link" @click.prevent="showModal = true">
                {{ $t("signin") }}
              </button>
            </div>

            <div class="header__sign-up" v-if="isMobile()">
              <button
                href="/register"
                class="header__link"
                :class="page == 'Registration' ? 'header__link--active' : null"
                @click="toForm()"
              >
                {{ $t("registration") }}
              </button>
            </div>

          </nav>
        </transition>

        <LangSwitcher class="header__lang-switcher" v-if="isMobile()" />

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
          <div class="header__sign-in" v-if="!isMobileBig()">
            <button class="header__link" @click.prevent="showModal = true">
              {{ $t("signin") }}
            </button>
          </div>
        </transition>

        <div class="header__sign-up" v-if="!isMobileBig()">
          <button
            href="/register"
            class="header__link"
            :class="page == 'Registration' ? 'header__link--active' : null"
            @click="toForm()"
          >
            {{ $t("registration") }}
          </button>
        </div>

        <LangSwitcher class="header__lang-switcher" v-if="!isMobile()" />
      </div>
    </div>

    <transition name="modalFade">
      <Modal v-if="showModal" @closed="showModal = false" />
    </transition>
  </header>
</template>

<script>
import { formType } from "@/global/registerFormType.js";
import router from "@/router/index";
import Modal from "./Modal.vue";
import LangSwitcher from "./LangSwitcher.vue";
import MenuItem from "./MenuItem.vue";

export default {
  name: "Header",
  props: ["page"],
  components: { Modal, MenuItem, LangSwitcher },
  data() {
    return {
      isPublisherForm: false,
      showMobileMenu: false,
      showModal: false,
      pageTransition: false,
    };
  },
  methods: {
    toForm: function () {
      formType.$emit("typeChanged", "publisher");
      router.push({ name: "Registration", params: { type: "publisher" } });
    },
  },
  watch: {
    $route() {
      if (this.isMobile()) {
        this.pageTransition = true;
        setTimeout(() => {
          this.showMobileMenu = false;
        }, 350);
        this.pageTransition = false;
      }
    },
    showModal: function () {
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
    z-index: 100;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  &__header-menu {
    margin: auto;
    transform: translateX(35px);

    &--transition {
      .header-menu__link,
      .header__link {
        opacity: 0;
      }
    }

    @include media-breakpoint-down(sm) {
      display: flex;
      transform: none;
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
      background-image: url("~@/assets/img/bg/bg-deco.png");
      background-position: right;
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
    right: 130px;

    @include media-breakpoint-down(md) {
      right: 100px;
    }

    @include media-breakpoint-down(sm) {
      position: static;
    }
  }

  &__sign-up {
    transform: translateX(10px);

    @include media-breakpoint-down(sm) {
      transform: none;
    }
  }

  &__lang-switcher {
    @include media-breakpoint-down(sm) {
        margin-left: auto;
    }

  }

  &__toggler {
    margin-left: rem(20px);
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

    @include media-breakpoint-down(xs) {
      flex-direction: column;
    }
  }
}

.modalFade-enter-active,
.modalFade-leave-active {
  transition: opacity 500ms;

  @include media-breakpoint-down(sm) {
    transition: opacity 100ms;
  }
}
.modalFade-enter,
.modalFade-leave-to {
  opacity: 0;
}

.menuFade-enter-active {
  transition: opacity 0.5s;
}

.menuFade-leave-active {
  transition: opacity 0.5s;
}

.menuFade-enter,
.menuFade-leave-to {
  opacity: 0;
}
</style>