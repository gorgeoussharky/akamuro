<template>
  <div class="about h-100">
    <div class="about__wrap">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-5">
            <section class="about__block about__block--left">
              <h1 class="about__heading">About us</h1>

              <div class="about__content">
                <p>
                  Akamuro is a cost per action financial affiliate network,
                  bringing together partners from all over the world.
                </p>

                <p>
                  We provide you with hundreds of the best offers, analytics and
                  unique tools optimized specifically for the European and Asian
                  financial markets...
                </p>
              </div>

              <ul class="about__links" v-if="!isMobile()">
                <li class="about__link-item">
                  <router-link to="/cookies" class="about__link"
                    >Cookie policy</router-link
                  >
                </li>

                <li class="about__link-item">
                  <router-link to="/policy" class="about__link"
                    >Privacy policy</router-link
                  >
                </li>

                <li class="about__link-item">
                  <router-link to="/public" class="about__link"
                    >Public offer</router-link
                  >
                </li>
              </ul>
            </section>
          </div>

          <div class="col-xl-8 col-lg-7">
            <section class="about__block about__block--right">
              <h1 class="about__heading">Contact</h1>

              <div class="about__content">
                <div class="about__contacts-list contacts-list">
                  <ul class="contacts-list__list">
                    <li class="contacts-list__item">
                      <a
                        href="mailto:offers@akamuro.com"
                        class="contacts-list__link"
                      >
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.8462 8.07688C13.8462 8.36018 13.7608 8.62282 13.624 8.8539L9.2522 4.28857L13.5766 0.757336C13.7448 1.0065 13.8462 1.29918 13.8462 1.61546V8.07688ZM6.92309 5.1175L12.9404 0.203537C12.6934 0.0773716 12.4154 0 12.1154 0H1.73076C1.43044 0 1.1523 0.0773716 0.906372 0.203537L6.92309 5.1175ZM8.60066 4.82021L7.20783 5.95839C7.12636 6.02463 7.02491 6.05771 6.92309 6.05771C6.82122 6.05771 6.71977 6.02463 6.6383 5.95839L5.24515 4.82016L0.818052 9.44384C1.08341 9.59922 1.3944 9.69231 1.73073 9.69231H12.1154C12.4517 9.69231 12.7628 9.59922 13.0281 9.44384L8.60066 4.82021ZM0.269611 0.75731C0.101418 1.00647 0 1.29915 0 1.61546V8.07691C0 8.36021 0.0849813 8.62285 0.22227 8.85392L4.59355 4.2878L0.269611 0.75731Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>
                        offers@akamuro.com (Advertising Questions)
                      </a>
                    </li>

                    <li class="contacts-list__item">
                      <a
                        href="mailto:partners@akamuro.com"
                        class="contacts-list__link"
                      >
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.8462 8.07688C13.8462 8.36018 13.7608 8.62282 13.624 8.8539L9.2522 4.28857L13.5766 0.757336C13.7448 1.0065 13.8462 1.29918 13.8462 1.61546V8.07688ZM6.92309 5.1175L12.9404 0.203537C12.6934 0.0773716 12.4154 0 12.1154 0H1.73076C1.43044 0 1.1523 0.0773716 0.906372 0.203537L6.92309 5.1175ZM8.60066 4.82021L7.20783 5.95839C7.12636 6.02463 7.02491 6.05771 6.92309 6.05771C6.82122 6.05771 6.71977 6.02463 6.6383 5.95839L5.24515 4.82016L0.818052 9.44384C1.08341 9.59922 1.3944 9.69231 1.73073 9.69231H12.1154C12.4517 9.69231 12.7628 9.59922 13.0281 9.44384L8.60066 4.82021ZM0.269611 0.75731C0.101418 1.00647 0 1.29915 0 1.61546V8.07691C0 8.36021 0.0849813 8.62285 0.22227 8.85392L4.59355 4.2878L0.269611 0.75731Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>
                        partners@akamuro.com (Web questions)
                      </a>
                    </li>

                    <li class="contacts-list__item">
                      <a
                        href="skype:.cid.dc1db02d7400ae62? chat"
                        class="contacts-list__link"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5975 8.48575C13.699 8.02987 13.7515 7.55737 13.7515 7.07263C13.7515 3.437 10.7625 0.489125 7.07438 0.489125C6.68587 0.489125 6.30438 0.522375 5.9325 0.585375C5.33575 0.21525 4.62963 0 3.87275 0C1.73338 0 0 1.70887 0 3.8185C0 4.52287 0.19425 5.18175 0.532 5.74963C0.443625 6.17663 0.396375 6.61938 0.396375 7.07263C0.396375 10.7091 3.38625 13.657 7.0735 13.657C7.49175 13.657 7.90038 13.6185 8.29675 13.5468C8.84275 13.8355 9.46575 14 10.1281 14C12.2666 14 14 12.2902 14 10.1824C14 9.5725 13.8547 8.99763 13.5975 8.48575ZM10.4991 10.2191C10.1902 10.6505 9.73438 10.9918 9.142 11.2333C8.55663 11.4739 7.85575 11.5964 7.056 11.5964C6.097 11.5964 5.29287 11.4301 4.66462 11.1011C4.21575 10.8623 3.8465 10.5394 3.56562 10.1386C3.28125 9.73612 3.13862 9.33625 3.13862 8.9495C3.13862 8.70887 3.23225 8.49975 3.41687 8.32913C3.59975 8.1585 3.83425 8.07363 4.11425 8.07363C4.3435 8.07363 4.54125 8.141 4.70225 8.27487C4.85538 8.4035 4.9875 8.59425 5.09338 8.83838C5.2115 9.10612 5.34013 9.33187 5.47575 9.50775C5.60787 9.68013 5.796 9.82362 6.03662 9.9365C6.279 10.0485 6.60537 10.1071 7.00612 10.1071C7.55825 10.1071 8.0115 9.99075 8.351 9.7615C8.68437 9.53837 8.84538 9.26888 8.84538 8.93987C8.84538 8.68087 8.7605 8.47612 8.58812 8.316C8.40613 8.148 8.16638 8.01763 7.87588 7.9275C7.57225 7.83475 7.16012 7.73325 6.65088 7.62825C5.957 7.48213 5.36812 7.30888 4.90088 7.112C4.42225 6.91075 4.0355 6.6325 3.75375 6.28425C3.46675 5.92988 3.3215 5.48625 3.3215 4.96475C3.3215 4.46775 3.47375 4.01975 3.77475 3.633C4.07312 3.24887 4.50887 2.94875 5.0715 2.74487C5.62537 2.54275 6.28425 2.44038 7.03062 2.44038C7.6265 2.44038 8.15063 2.50863 8.589 2.64337C9.02913 2.77812 9.40013 2.96013 9.6915 3.185C9.9855 3.4125 10.2042 3.65312 10.3407 3.90512C10.479 4.15887 10.5499 4.41175 10.5499 4.65588C10.5499 4.89125 10.458 5.10563 10.276 5.29112C10.0923 5.47925 9.86125 5.57375 9.59 5.57375C9.34325 5.57375 9.149 5.51338 9.01513 5.397C8.89 5.28763 8.75963 5.117 8.61613 4.87375C8.44987 4.56225 8.24775 4.31638 8.01675 4.14225C7.79187 3.97338 7.41738 3.88938 6.90112 3.88938C6.42338 3.88938 6.03312 3.98388 5.74438 4.17113C5.46613 4.3505 5.3305 4.557 5.3305 4.802C5.3305 4.95162 5.37425 5.07675 5.46438 5.18438C5.55888 5.29988 5.69275 5.39875 5.8625 5.48275C6.0375 5.56938 6.21863 5.63937 6.39975 5.68837C6.58525 5.73912 6.89587 5.81525 7.32375 5.91237C7.8645 6.02612 8.36063 6.15475 8.79988 6.29387C9.24525 6.433 9.6285 6.60538 9.9435 6.8075C10.2629 7.01313 10.5157 7.27563 10.696 7.59063C10.8763 7.90825 10.9673 8.29763 10.9673 8.75088C10.9664 9.2925 10.8089 9.78687 10.4991 10.2191Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>

                        live:.cid.dc1db02d7400ae62
                      </a>
                    </li>

                    <li class="contacts-list__item">
                      <a
                        href="https://t.me/akamuro"
                        class="contacts-list__link"
                      >
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.27827 8.78775L6.0136 12.5105C6.39227 12.5105 6.55628 12.3478 6.75295 12.1525L8.52832 10.4558L12.2071 13.1499C12.8818 13.5259 13.3571 13.3279 13.5391 12.5292L15.9538 1.21423C16.1678 0.216877 15.5938 -0.173799 14.9365 0.0708735L0.742803 5.505C-0.225887 5.88101 -0.21122 6.42103 0.578132 6.6657L4.20689 7.79439L12.6358 2.52027C13.0324 2.25759 13.3931 2.40293 13.0964 2.6656L6.27827 8.78775Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>

                        @akamuro
                      </a>
                    </li>
                  </ul>

                  <ul class="contacts-list__list">
                    <li class="contacts-list__item">
                      <a
                        href="https://goo.gl/maps/oL58LTLoqkNJ6wbv7"
                        class="contacts-list__link"
                      >
                        <svg
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.93764 2.98668C8.89493 2.82659 8.80819 2.65601 8.74402 2.50667C7.97617 0.661332 6.29843 0 4.94373 0C3.13023 0 1.13288 1.21603 0.866211 3.72256V4.23465C0.866211 4.25603 0.873576 4.448 0.884039 4.54403C1.03352 5.73858 1.97611 7.00812 2.68007 8.20267C3.43744 9.48251 4.22331 10.7415 5.00191 12C5.482 11.1787 5.96037 10.3467 6.42953 9.54668C6.55739 9.3119 6.70582 9.07727 6.83382 8.85318C6.91914 8.70397 7.08213 8.55476 7.15659 8.41594C7.91392 7.02936 9.13294 5.63206 9.13294 4.256V3.6907C9.13297 3.54152 8.94805 3.01885 8.93764 2.98668ZM4.97693 5.5574C4.44386 5.5574 3.86037 5.29085 3.57236 4.55472C3.52945 4.43754 3.53291 4.20271 3.53291 4.1812V3.85053C3.53291 2.9121 4.32972 2.48535 5.02291 2.48535C5.87631 2.48535 6.53633 3.16811 6.53633 4.0215C6.53633 4.87487 5.83033 5.5574 4.97693 5.5574Z"
                            fill="white"
                            fill-opacity="0.6"
                          />
                        </svg>

                        Lithuania, Vilniaus m. V.Nageviciaus g.3

                        <div class="contacts-list__map">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18980.049475370884!2d25.297857046125138!3d54.71022916155925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96baab592f8f%3A0xdf0823a858efb045!2zVi4gTmFnZXZpxI1pYXVzIGcuIDMsIFZpbG5pdXMgMDgyMzcsINCb0LjRgtCy0LA!5e0!3m2!1sru!2sru!4v1610050436065!5m2!1sru!2sru"
                            width="100%"
                            height="165"
                            frameborder="0"
                            style="border: 0"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                          ></iframe>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <ul class="about__links" v-if="isMobile()">
                  <li class="about__link-item">
                    <router-link to="/cookies" class="about__link"
                      >Cookie policy</router-link
                    >
                  </li>

                  <li class="about__link-item">
                    <router-link to="/policy" class="about__link"
                      >Privacy policy</router-link
                    >
                  </li>

                  <li class="about__link-item">
                    <router-link to="/public" class="about__link"
                      >Public offer</router-link
                    >
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "~@/assets/scss/variables";
.about {
  &__wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      padding-top: rem(60px);
    }

    &::before {
      content: "";
      width: calc(50% + 220px);
      margin-left: auto;
      height: 100%;
      background: #1c1c1c;
      position: absolute;
      right: 0;

      @include media-breakpoint-down(lg) {
        width: calc(50% + 120px);
      }

      @include media-breakpoint-down(md) {
        content: none;
      }
    }
  }

  &__block {
    color: rgba(255, 255, 255, 0.8);

    @include media-breakpoint-down(md) {
      padding: rem(60px 15px);
      margin: rem(0 -15px);
      background: #1c1c1c;
    }

    &--left {
      max-width: 305px;
      position: relative;

      @include media-breakpoint-down(md) {
        max-width: unset;
        background-color: #000;
        background-image: url("~@/assets/img/bg/bg-deco.png");
        background-position: right;
      }
    }
  }

  &__heading {
    font-size: rem(26px);
    margin-bottom: rem(24px);
    color: #ffffff;

    &::after {
      content: "";
      width: 100%;
      background: linear-gradient(
        89.99deg,
        #ffffff 0.01%,
        rgba(255, 255, 255, 0) 67.35%
      );
      display: block;
      height: 3px;
      margin-top: rem(24px);
    }
  }

  &__text {
    margin-bottom: rem(22px);
  }

  &__contacts-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: rem(40px);

    @media (max-width: 598px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0;
    }
  }

  &__links {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: rem(-200px);
    width: 100%;
    margin-bottom: 0;

    @include media-breakpoint-down(md) {
      position: static;
      margin-top: rem(32px);
    }
  }

  &__link {
    color: rgba(255, 255, 255, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    display: block;
    transition: 250ms;
    font-size: rem(12px);

    &:hover {
      color: #528edb;
      border-bottom-color: transparent;
      transition: 250ms;
      text-decoration: none;
    }
  }
}

.contacts-list {
  &__list {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: rem(20px);

    @include media-breakpoint-down(xs) {
      margin-top: rem(32px);
    }
  }

  &__item {
    margin-bottom: rem(42px);

    @include media-breakpoint-down(xs) {
      margin-bottom: rem(32px);
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    color: rgba(255, 255, 255, 0.8);

    svg {
      margin-right: rem(16px);
    }

    &:hover {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  &__map {
    margin-top: rem(20px);
    filter: grayscale(1);
  }
}
</style>