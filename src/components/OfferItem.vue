<i18n>
{
  "en": {
    "conditions": "Conditions",
    "notice": "You need to register to view the conditions"
  },
  "vn":  {
    "conditions": "Điều kiện",
    "notice": "Để xem điều kiện offer, bạn phải đăng ký"
  }
}
</i18n>


<template>
  <div class="offer-item">
    <div class="offer-item__wrap">
      <div class="offer-item__logo">
        <img
          :src="require(`@/assets/img/offers/${offer.logo}`)"
          :alt="offer.title"
        />
      </div>
      <div class="offer-item__info">
        <div class="offer-item__title">{{ offer.title }}</div>
        <div class="offer-item__category">
          <div class="offer-item__country">
            <img
              :src="flag"
              :alt="offer.country"
              :title="offer.country"
              v-if="flag"
            />
          </div>
          {{ offer.category }}
        </div>
      </div>
      <div class="offer-item__meta">
        <div class="offer-item__meta-item" v-if="offer.meta.EPL == '-'">
          EPL: <img src="@/assets/img/lock.svg" alt="" />
        </div>
        <div class="offer-item__meta-item" v-else>
          EPL: {{ offer.meta.EPL }}
        </div>
        <div class="offer-item__meta-item">СR: {{ offer.meta.CR }}</div>
      </div>
      <div class="offer-item__meta">
        <div class="offer-item__meta-item">EPС: {{ offer.meta.EPC }}</div>
        <div class="offer-item__meta-item">AR: {{ offer.meta.AR }}</div>
      </div>
      <div class="offer-item__type">{{ offer.target }}</div>
      <a
        href="https://network.akamuro.com/v2/sign/in"
        target="_blank"
        rel="nofollow"
        class="offer-item__link-wrap"
        @mouseover="notice = true"
        @mouseout="notice = false"
      >
        <div class="offer-item__link">
          <img src="@/assets/img/lock.svg" alt="" />
          {{ $t("conditions") }}
        </div>
        <div class="offer-item__locked" v-show="notice">
         {{ $t("notice") }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: false,
    };
  },
  props: {
    offer: {
      type: Object,
      required: true,
    },
    flag: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
.offer-item {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: #222222;
    border-radius: 2px;
    padding: rem(14px 20px);
    padding-right: rem(15px);

    @include media-breakpoint-down(sm) {
      padding: rem(18px);
    }
  }

  &__logo {
    flex: 0 1 20%;
    max-width: 175px;

    img {
      max-width: 100%;
    }

    @include media-breakpoint-down(sm) {
      flex: 0 1 100%;
      max-width: 100%;
      margin-bottom: rem(22px);
    }
  }

  &__info {
    flex: 0 1 15%;
    max-width: 150px;

    @include media-breakpoint-down(sm) {
      flex: 0 1 100%;
      max-width: 100%;
      margin-bottom: rem(22px);
    }
  }

  &__title {
    font-weight: 900;
    font-size: rem(14px);
    line-height: 130%;
    margin-bottom: rem(8px);
    color: #fff;
  }

  &__category {
    display: flex;
    align-items: center;
    font-size: rem(14px);
    color: rgba(255, 255, 255, 0.61);
  }

  &__country {
    margin-right: rem(8px);
  }

  &__meta {
    flex: 0 1 12%;
    max-width: 100px;

    @include media-breakpoint-down(sm) {
      flex: 0 1 50%;
      max-width: 50%;
      margin-bottom: rem(22px);
    }

    &-item {
      font-size: rem(14px);
      color: rgba(255, 255, 255, 0.61);
    }
  }

  &__type {
    flex: 0 1 10%;
    max-width: 50px;
    font-size: rem(24px);
    color: rgba(255, 255, 255, 0.61);

    @include media-breakpoint-down(sm) {
      flex: 0 1 100%;
      max-width: 100%;
      margin-bottom: rem(22px);
    }
  }

  &__link-wrap {
    flex: 0 1 30%;
    max-width: 230px;
    border: 1px dashed #414141;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    @include media-breakpoint-down(sm) {
      flex: 0 1 100%;
      max-width: 100%;
    }
  }

  &__link {
    padding: rem(10px 10px);
    font-size: rem(14px);
    color: rgba(255, 255, 255, 0.61);
    display: flex;
    align-items: center;

    img {
      margin-right: rem(8px);
    }
  }

  &__locked {
    font-size: rem(13px);
    text-align: center;
    color: rgba(255, 255, 255, 0.61);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    line-height: 125%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: #222222;
  }
}
</style>