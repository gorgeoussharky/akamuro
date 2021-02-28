<template>
  <div class="lang-switcher">
    <div class="lang-switcher__list">
      <template v-for="lang in langs">
        <li
          class="lang-switcher__item"
          v-if="lang.code != $i18n.locale"
          :key="lang.code"
        >
          <a
            href="#"
            class="lang-switcher__link"
            @click.prevent="changeLocale(lang.code)"
          >
            <img :src="lang.flag" :alt="lang.code" />
          </a>
        </li>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        {
          code: "en",
          flag: require("@/assets/img/flags/en.svg"),
        },
        {
          code: "vn",
          flag: require("@/assets/img/flags/viet.svg"),
        },
      ],
    };
  },
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
.lang-switcher {
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-left: 16px;
    }

    &__link {
        img {
            width: 18px;
            height: 18px;

            @include media-breakpoint-down(sm) {
                width: 22px;
                height: 22px;
            }
        }
    }
}
</style>