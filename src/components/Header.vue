<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/" class="header__logo"> Akamuro </router-link>

        <nav class="header__header-menu header-menu">
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
        </nav>

        <div class="header__sign-in">
          {{ isAdvertiseForm }}
          <a href="" class="header__link">Sign In</a>
        </div>

        <div class="header__sign-up">
          <router-link
            to="/register"
            class="header__link"
            active-class="header__link--active"
          >
            Registration
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["page"],
  computed: {
    isAdvertiseForm: function () {
      var pageName = this.page.name;
      var type = this.page.params.type;
      console.log('type:' + type, 'name:' + pageName);
      if (pageName == "Registration" && type == "advertiser") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "~sass-rem/rem";

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

  &__wrap {
    display: flex;
    align-items: center;
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
  }

  &__link {
    color: #fff;
    position: relative;
    padding: rem(7px 10px);

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
}

.header-menu {
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  &__item {
    margin: rem(0 10px);

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