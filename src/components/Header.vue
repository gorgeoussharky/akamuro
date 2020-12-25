<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/" class="header__logo"> Akamuro </router-link>

        <nav class="header__header-menu header-menu">
          <ul class="header-menu__list">
            <li class="header-menu__item">
              <router-link to="/advertiser" class="header-menu__link">
                Advertiser
              </router-link>
            </li>
            <li class="header-menu__item">
              <router-link to="/pubisher" class="header-menu__link">
                Pubisher
              </router-link>
            </li>
            <li class="header-menu__item">
              <router-link to="/about-us" class="header-menu__link">
                About us
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="header__sign-in">
          <router-link to="/auth" class="header__link">
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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0) 100%);

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
        margin: rem(0 35px);

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

        &:hover {
            color: #fff;
            text-decoration: none;
        }

    }
}
</style>