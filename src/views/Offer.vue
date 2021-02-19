<i18n>
{
  "en": {
    "heading": "Top offers, best conditions, fast payments - everything for your work",
    "special": "Special offer",
    "request": "Special conditions",
    "subheading": "The best offers for you",
    "mexico": "Mexico",
    "spain": "Spain",
    "vietnam": "Vietnam",
    "philippines": "Philippines",
    "srilanka": "Sri Lanka",
    "indonesia": "indonesia",
    "reset": "Reset",
    "category": "Category",
    "country": "Country",
    "target":"Target",
    "search": "Search"
  },
  "vn":  {
    "heading": "Offer tốt nhất, tỉ lệ cao, thanh toán nhanh - mọi thứ dành cho publisher",
    "special": "Offer đặc biệt",
    "request": "Offer theo yêu cầu",
    "subheading": "Đề nghị tốt nhất dành cho bạn",
    "mexico": "Mexico",
    "spain": "Spain",
    "vietnam": "Vietnam",
    "philippines": "Philippines",
    "srilanka": "Sri Lanka",
    "indonesia": "indonesia",
    "reset": "Đặt lại bộ lọc",
    "category": "Thể loại",
    "country": "Quốc gia",
    "target":"Mô hình",
    "search": "Tìm kiếm"
  }
}
</i18n>


<template>
  <main class="offer-page">
    <div class="offer-page__wrap">
      <div class="container-xl">
        <h1 class="offer-page__heading">
          {{ $t('heading') }}
        </h1>

        <div class="offer-page__type-switcher type-switcher">
          <div class="type-switcher__group">
            <input
              id="special"
              type="radio"
              value="special"
              class="type-switcher__control"
              v-model="utility.type"
            />
            <label for="special" class="type-switcher__label">
               {{ $t('special') }}
            </label>
          </div>
          <div class="type-switcher__group">
            <input
              id="request"
              type="radio"
              name="type"
              value="request"
              v-model="utility.type"
              class="type-switcher__control"
            />
            <label for="request" class="type-switcher__label">
              {{ $t('request') }}
            </label>
          </div>
        </div>

        <div
          class="offer-page__offer-form offer-form"
          v-if="utility.type == 'request'"
        >
          <div class="offer-form__group">
            <label for="offer" class="offer-form__label">
              Введите в это окно свой любимый оффер. Вы можете указать название
              оффера, ссылку на оффер и любую полезную информацию
            </label>

            <textarea
              id="offer"
              name="offer_custon"
              class="offer-form__control"
              placeholder="Введите в это окно свой любимый оффер. Вы можете указать название оффера, ссылку на оффер и любую полезную информацию"
            ></textarea>

            <button class="offer-form__btn" @click="submitForm()">
              Отправить
            </button>
          </div>
        </div>

        <div
          class="offer-page__offer-form offer-form"
          v-if="utility.type == 'special'"
        >
          <div class="offer-form__group">
            <label for="offer" class="offer-form__label">
              Введите в это окно свой любимый оффер. Вы можете указать название
              оффера, ссылку на оффер и любую полезную информацию
            </label>

            <textarea
              id="offer"
              name="offer_custon"
              class="offer-form__control"
              placeholder="Введите в это окно свой любимый оффер. Вы можете указать название оффера, ссылку на оффер и любую полезную информацию"
            ></textarea>

            <button class="offer-form__btn" @click="submitForm()">
              Отправить
            </button>
          </div>
        </div>

        <h2 class="offer-page__subheading">{{ $t('subheading') }}</h2>
        <div class="offer-page__filters filters">
          <div class="filters__wrap filters__wrap--sm" v-if="isMobileBig()">
            <div class="filters__group">
              <v-select
                class="filters__control filters__control--select"
                id="category"
                name="category"
                :options="options.categories"
                :placeholder="$t('category')"
                v-model="filters.category"
                :searchable="false"
              ></v-select>
            </div>
            <button
              class="filters__toggler"
              @click="utility.showFilters = true"
            >
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.352295 2.94507L16.6894 2.94507"
                  stroke="white"
                  stroke-opacity="0.69"
                  stroke-width="1.21579"
                />
                <path
                  d="M0.352295 9.23474L16.6894 9.23474"
                  stroke="white"
                  stroke-opacity="0.69"
                  stroke-width="1.21579"
                />
                <path
                  d="M0.352295 15.649L16.6894 15.649"
                  stroke="white"
                  stroke-opacity="0.69"
                  stroke-width="1.21579"
                />
                <circle cx="2.46798" cy="2.94186" r="2.11568" fill="#131313" />
                <circle
                  cx="2.46798"
                  cy="2.94186"
                  r="1.50779"
                  stroke="white"
                  stroke-opacity="0.69"
                  stroke-width="1.21579"
                />
                <circle cx="8.52316" cy="9.29806" r="2.11568" fill="#131313" />
                <circle
                  cx="8.52316"
                  cy="9.29806"
                  r="1.50779"
                  stroke="white"
                  stroke-opacity="0.69"
                  stroke-width="1.21579"
                />
                <circle cx="14.5736" cy="15.646" r="2.11568" fill="#131313" />
                <circle
                  cx="14.5736"
                  cy="15.646"
                  r="1.50779"
                  stroke="white"
                  stroke-opacity="0.69"
                  stroke-width="1.21579"
                />
              </svg>
            </button>
          </div>
          <div
            class="filters__wrap"
            v-if="isMobileBig() ? utility.showFilters : true"
          >
            <div class="filters__head" v-if="isMobileBig()">
              <router-link to="/" class="filters__logo"> Akamuro </router-link>
              <button
                class="filters__close"
                @click="utility.showFilters = false"
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
            </div>
            <div class="filters__group">
              <v-select
                class="filters__control filters__control--select"
                id="category"
                name="category"
                :options="options.categories"
                :placeholder="$t('category')"
                v-model="filters.category"
                :searchable="false"
              ></v-select>
            </div>
            <div class="filters__group">
              <v-select
                class="filters__control filters__control--select"
                id="country"
                label="title"
                name="country"
                :options="options.countries"
                :placeholder="$t('country')"
                v-model="filters.country"
                :searchable="false"
              >
                <template v-slot:option="option">
                  <img class="filters__item-icon" :src="option.flag" />
                  {{ option.title }}
                </template>
              </v-select>
            </div>
            <div class="filters__group">
              <v-select
                class="filters__control filters__control--select"
                id="taget"
                name="target"
                :options="options.targets"
                v-model="filters.target"
                :placeholder="$t('target')"
                :searchable="false"
              ></v-select>
            </div>
            <div class="filters__group filters__group--search">
              <vue-autosuggest
                :suggestions="[
                  {
                    data: filteredNames,
                  },
                ]"
                v-model="filters.name"
                :input-props="{
                  class: 'filters__control',
                  placeholder: $t('search'),
                }"
              >
                <template slot-scope="{ suggestion }">
                  <span>{{
                    suggestion.item.substr(0, filters.name.length)
                  }}</span
                  >{{ suggestion.item.substr(filters.name.length) }}
                </template>
              </vue-autosuggest>
            </div>
            <div class="filters__group filters__group--reset">
              <button class="filters__btn" @click="resetFilters()">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7"
                    stroke="#A3A3A3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L7 7"
                    stroke="#A3A3A3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ $t('reset') }}
              </button>
            </div>
          </div>
        </div>
        <div class="offer-page__offers-table offers-table">
          <OfferItem
            class="offers-table__offer-item"
            v-for="(offer, key) in filteredOffers"
            :key="key"
            :offer="offer"
            :flag="findFlag(offer.country)"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import vSelect from "vue-select";
import { VueAutosuggest } from "vue-autosuggest";
import OpenIndicator from "@/components/OpenIndicator.vue";
import OfferItem from "@/components/OfferItem.vue";
import axios from "axios";

vSelect.props.components.default = () => ({ OpenIndicator });

export default {
  data() {
    return {
      options: {
        categories: [
          "Credit service",
          "Loans",
          "Bank",
          "Gambling",
          "E-commerce",
          "COD",
          "Nutra",
          "Adult",
        ],
        countries: [
          {
            title: this.$t("mexico"),
            flag: require("@/assets/img/flags/mex.svg"),
          },
          {
            title: this.$t("spain"),
            flag: require("@/assets/img/flags/spain.svg"),
          },
          {
            title: this.$t("vietnam"),
            flag: require("@/assets/img/flags/viet.svg"),
          },
          {
            title: this.$t("philippines"),
            flag: require("@/assets/img/flags/ph.svg"),
          },
          {
            title: this.$t("srilanka"),
            flag: require("@/assets/img/flags/sri.svg"),
          },
          {
            title: this.$t("indonesia"),
            flag: require("@/assets/img/flags/ind.svg"),
          },
        ],
        targets: ["CPA", "CPL", "CPI", "CPS", "CPQL"],
      },
      offers: [
        {
          logo: require("@/assets/img/offers/offer1.png"),
          title: "Forward bank",
          category: "Кредитные истории",
          country: "Россия",
          meta: {
            eps: "-",
            cr: "30,23%",
            epl: "-",
            ar: "-",
          },
          target: "CPS",
        },
        {
          logo: require("@/assets/img/offers/offer2.png"),
          title: "CCloan Украина",
          category: "E-commerce",
          country: "Индонезия",
          meta: {
            eps: "24.27 rub",
            cr: "1,65 %",
            epl: "1475.71 rub",
            ar: "100%",
          },
          target: "CPL",
        },
        {
          logo: require("@/assets/img/offers/offer4.png"),
          title: "Carry Cash",
          category: "Credit service",
          country: "Филиппины",
          meta: {
            eps: "28.21 rub",
            cr: "18,80 %",
            epl: "150 rub",
            ar: "100%",
          },
          target: "CPL",
        },
        {
          logo: require("@/assets/img/offers/offer3.png"),
          title: "Alfa-Bank",
          category: "Gambling",
          country: "Мексика",
          meta: {
            eps: "35.20 rub",
            cr: "8.09%",
            epl: "434.04 rub",
            ar: "17,91%",
          },
          target: "CPS",
        },
        {
          logo: require("@/assets/img/offers/offer1.png"),
          title: "Forward bank",
          category: "Кредитные истории",
          country: "Россия",
          meta: {
            eps: "-",
            cr: "30,23%",
            epl: "-",
            ar: "-",
          },
          target: "CPS",
        },
        {
          logo: require("@/assets/img/offers/offer2.png"),
          title: "CCloan Украина",
          category: "Bank",
          country: "Испания",
          meta: {
            eps: "24.27 rub",
            cr: "1,65 %",
            epl: "1475.71 rub",
            ar: "100%",
          },
          target: "CPL",
        },
        {
          logo: require("@/assets/img/offers/offer4.png"),
          title: "Carry Cash",
          category: "Credit service",
          country: "Филиппины",
          meta: {
            eps: "28.21 rub",
            cr: "18,80 %",
            epl: "150 rub",
            ar: "100%",
          },
          target: "CPL",
        },
        {
          logo: require("@/assets/img/offers/offer3.png"),
          title: "Alfa-Bank",
          category: "Bank",
          country: "Филиппины",
          meta: {
            eps: "35.20 rub",
            cr: "8.09%",
            epl: "434.04 rub",
            ar: "17,91%",
          },
          target: "CPQL",
        },
      ],
      filters: {
        category: "",
        country: "",
        target: "",
        name: "",
      },
      utility: {
        showFilters: false,
        type: "special",
      },
    };
  },
  components: {
    vSelect,
    VueAutosuggest,
    OfferItem,
  },
  methods: {
    findFlag(item) {
      var country = this.options.countries.find(
        (country) => country.title === item
      );
      if (country != undefined) return country.flag;
    },
    resetFilters() {
      Object.keys(this.filters).forEach((key) => {
        this.filters[key] = null;
      });
    },
    submitForm() {
      axios
        .post("http://akamuro.crazytest.studio/process.php", this.filters.name)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
  computed: {
    filteredOffers() {
      var offers = this.offers;

      if (this.filters.category) {
        offers = offers.filter((item) => {
          return item.category == this.filters.category;
        });
      }

      if (this.filters.country) {
        offers = offers.filter((item) => {
          return item.country == this.filters.country.title;
        });
      }

      if (this.filters.target) {
        offers = offers.filter((item) => {
          return item.target == this.filters.target;
        });
      }

      if (this.filters.name) {
        offers = offers.filter((item) => {
          return (
            item.title.substr(0, this.filters.name.length).toUpperCase() ==
            this.filters.name.toUpperCase()
          );
        });
      }

      return offers;
    },
    offerNames() {
      var offers = this.offers;
      var names = [];

      names = offers.map((offer) => offer.title);

      return names;
    },
    filteredNames() {
      var query = this.filters.name;
      var names = [];
      if (query)
        names = this.offerNames.filter((name) => {
          return (
            name.substr(0, query.length).toUpperCase() == query.toUpperCase()
          );
        });

      return names;
    },
  },
  mounted() {
    document.documentElement.style.overflow = "auto";
  },
  destroyed() {
    document.documentElement.style.overflow = "hidden";
  },
  watch: {
    "utility.showFilters": function (val) {
      var header = document.querySelector(".header");
      if (val) {
        header.style.display = "none";
      } else {
        header.style.display = "block";
      }
    },
  },
};
</script>

<style lang="scss">
$vs-colors: (
  lightest: gba(255, 255, 255, 0.61),
  light: #a3a3a3,
  dark: rgba(255, 255, 255, 0.61),
  darkest: rgba(0, 0, 0, 0.15),
);
$vs-dropdown-bg: #232323;
$vs-component-placeholder-color: rgba(255, 255, 255, 0.61);

@import "~vue-select/src/scss/vue-select.scss";
@import "~@/assets/scss/variables";

.offer-page {
  &__wrap {
    min-height: 100vh;
    background-size: cover;
    padding-top: rem(110px);
    padding-bottom: rem(50px);
    position: relative;

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
      background-size: cover;
      z-index: -1;
      opacity: 0.15;
      filter: grayscale(0.85) sepia(0.1);
      transform: none;
    }
  }

  &__heading {
    margin-bottom: rem(45px);
    color: #fff;
    max-width: 510px;

    @include media-breakpoint-down(sm) {
      margin-bottom: rem(35px);
    }

    &::after {
      content: "";
      height: 3px;
      background: linear-gradient(
        89.99deg,
        #ffffff 0.01%,
        rgba(255, 255, 255, 0) 100%
      );
      display: block;
      margin-top: rem(22px);
      width: 80%;

      @include media-breakpoint-down(sm) {
        width: calc(100% + 22px);
      }
    }
  }

  &__type-switcher {
    display: flex;
    align-items: center;
    margin-bottom: rem(20px);

    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }

  &__offer-form {
    margin-bottom: rem(45px);
  }

  &__subheading {
    color: #fff;
    font-family: "MyriadPro";
    font-size: rem(26px);
    text-shadow: 0px 0px 18px #000000;
    margin-bottom: rem(16px);
  }

  &__filters {
    margin-bottom: rem(16px);
  }
}

.offer-form {
  &__group {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #2f2f2f;
    border-radius: 2px;
    padding: rem(12px 16px);
    padding-left: rem(32px);

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      align-items: flex-start;
      padding: rem(16px 20px);
    }
  }

  &__label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &__control {
    background-color: transparent;
    width: 85%;
    color: #fff;
    border: none;
    height: 60px;
    resize: none;

    @include media-breakpoint-down(sm) {
      width: 100%;
      line-height: 112%;
      height: 90px;
      margin-bottom: rem(14px);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.43);
    }
  }

  &__btn {
    @extend %btn-accent;
    margin-left: auto;
    font-weight: 500;
    font-size: rem(12px);

    @include media-breakpoint-down(sm) {
      margin-left: 0;
    }
  }
}

.type-switcher {
  &__group {
    &:nth-of-type(odd) {
      /*       .type-switcher__label {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%);

        &::after {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%);
        }
      } */
    }

    &:nth-of-type(even) {
      /*       .type-switcher__label {
        clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%, 90% 100%);

        &::after {
          clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%, 90% 100%);
        }
      } */
    }
  }

  &__control {
    appearance: none;
    position: absolute;
    z-index: -999;
    opacity: 0;

    &:checked {
      ~ .type-switcher__label {
        color: #fff;
        /*         font-weight: 600; */
        transition: 250ms;

        &::after {
          /* background: #102743; */
          opacity: 1;
        }
      }
    }
  }

  &__label {
    cursor: pointer;
    color: rgba(#fff, 0.5);
    text-transform: uppercase;
    padding: rem(13px 36px);
    position: relative;
    /* background: rgba(#fff, 0.5); */
    letter-spacing: 0.05em;
    transition: 250ms;
    font-size: rem(14px);

    @include media-breakpoint-down(md) {
      padding: rem(14px 22px);
      font-size: rem(12px);
      text-align: center;
    }

    /*     &::after {
      content: "";
      left: 1px;
      top: 1px;
      height: calc(100% - 2px);
      width: calc(100% - 2px);
      position: absolute;
      background: #000;
      z-index: -1;
    } */

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
  }
}

.filters {
  &__wrap {
    display: flex;
    align-items: center;

    &:not(.filters__wrap--sm) {
      @include media-breakpoint-down(sm) {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #242424;
        flex-direction: column;
        align-items: flex-start;
        z-index: 1000;
        padding: rem(0 22px);
        padding-top: rem(100px);
      }
    }

    &--sm {
      .filters__group {
        flex: 1 1 75%;
        width: 75%;
        margin-right: rem(20px);
        margin-bottom: 0;
      }
    }
  }

  &__head {
    position: absolute;
    top: rem(10px);
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: rem(0 22px);
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

  &__close {
    margin-left: auto;
    z-index: 10;

    svg line {
      transform-origin: center;
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

  &__toggler {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #242424;
    border-radius: 2px;
  }

  &__group {
    flex: 1 1 11.5%;
    margin-right: rem(32px);
    position: relative;

    @include media-breakpoint-down(sm) {
      flex: 0 1 auto;
      margin-right: 0;
      margin-bottom: rem(36px);
      width: 100%;
      height: auto;
    }

    &--search {
      flex: 1 1 37.5%;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.7898 14.4595L11.4854 11.1551C12.3666 10.0943 12.8967 8.73258 12.8967 7.24894C12.8967 3.87248 10.1505 1.12954 6.77726 1.12954C3.4008 1.12954 0.657861 3.87568 0.657861 7.24894C0.657861 10.6223 3.40395 13.3683 6.77726 13.3683C8.2609 13.3683 9.62265 12.8382 10.6834 11.957L13.9878 15.2614C14.0965 15.3701 14.2433 15.4295 14.3888 15.4295C14.5314 15.4295 14.6797 15.3752 14.7908 15.2604C15.0098 15.0403 15.0094 14.6792 14.7898 14.4595ZM1.79289 7.24894C1.79289 4.5008 4.029 2.26768 6.77416 2.26768C9.5223 2.26768 11.7554 4.50379 11.7554 7.24894C11.7554 9.99422 9.52218 12.2333 6.77416 12.2333C4.02912 12.2333 1.79289 9.9972 1.79289 7.24894Z' fill='%23A3A3A3' stroke='%23A3A3A3' stroke-width='0.3'/%3E%3C/svg%3E%0A");
      background-position: 100%;
      background-repeat: no-repeat;

      @include media-breakpoint-down(sm) {
        flex: 0 1 auto;
        height: auto;
      }
    }

    &--reset {
      flex: 0 1 auto;
      max-width: 150px;
      margin-right: 0;
      margin-left: auto;

      @include media-breakpoint-down(sm) {
        margin-left: 0;
        margin-bottom: rem(26px);
        margin-top: auto;
      }
    }
  }

  &__label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &__control {
    width: 100%;

    &:not(.filters__control--select) {
      cursor: pointer;
      border: none;
      border-bottom: 1px solid #2f2f2f;
      border-radius: 2px;
      transition: 350ms;
      background-color: transparent;
      padding-bottom: 7px;
      color: rgba(255, 255, 255, 0.61);

      &::placeholder {
        color: rgba(255, 255, 255, 0.61);
      }

      &:hover {
        border-bottom-color: #fff;
        transition: 350ms;
      }

      &:focus {
        border-bottom-color: $accent;
        transition: 350ms;
      }
    }

    &:hover {
      .vs__dropdown-toggle {
        border-bottom-color: #fff;
        transition: 350ms;
      }
    }
  }

  &__item-icon {
    margin-right: rem(16px);
  }

  &__btn {
    color: rgba(255, 255, 255, 0.61);

    svg {
      margin-right: 8px;
    }
  }
}

.offers-table {
  &__offer-item {
    margin-bottom: rem(6px);
  }
}

.vs__dropdown-toggle {
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #2f2f2f;
  border-radius: 2px;
  transition: 350ms;
}

.vs__dropdown-option {
  color: rgba(255, 255, 255, 0.5);
  font-size: rem(14px);
  padding: rem(7px);
}

.vs__dropdown-option--highlight {
  background: #383838;
  color: rgba(255, 255, 255, 0.5);
}

.vs__dropdown-toggle {
  padding-bottom: rem(7px);
}

.vs__actions {
  padding: 0;
}

.vs__open-indicator {
  fill: none;
}

.vs__search,
.vs__search:focus {
  padding: 0;
  border: none;
}

.autosuggest {
  &__results-container {
    margin: 0;
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 100%;
    width: 100%;
    background: #232323;

    ul {
      padding: 0;
      list-style: none;
      margin: 0;
    }
  }

  &__results-item {
    color: rgba(255, 255, 255, 0.5);
    font-size: rem(14px);
    padding: rem(7px);
    cursor: pointer;

    span {
      color: rgba(255, 255, 255, 0.85);
    }

    &:hover {
      background: #383838;
    }
  }
}
</style>