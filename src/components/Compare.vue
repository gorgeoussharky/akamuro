<i18n>
{
  "en": {
    "publisher": "Publisher",
    "advertiser": "Advertiser"
  },
  "vn":  {
    "publisher": "Nhà xuất bản",
    "advertiser": "Nhà quảng cáo"
  }
}
</i18n>

<template>
  <figure
    :class="{ full }"
    class="image-compare"
    @mousemove.prevent="onMouseMove"
    @touchmove.prevent="onMouseMove"
    :style="isMobile() && disabled ? 'opacity: 0' : 'opacity: 1'"
  >
    <!-- @click.prevent="onMouseMove($event, true)" -->
    <!--     <transition name="fade">
      <img class="image-compare__pre-img" v-if="greyed" :src="preImg" alt="" />
    </transition> -->

    <div
      :style="wrapperDimensions"
      class="wrapper"
      @mousedown.prevent="onMouseDownImage"
    >
      <!-- a-img -->
      <img
        :src="mutableAfter"
        :style="dimensions"
        alt="after"
        class="image-compare__bg"
        :class="greyed ? 'image-compare__bg--greyed' : null"
      />
      <img
        :src="mutableAfter_2"
        :style="dimensions_samurai_before"
        class="image-compare__samurai"
        alt="after"
      />
    </div>

    <!-- b-img -->
    <img
      :src="mutableBefore"
      :style="dimensions"
      alt="before"
      @mousedown.prevent="onMouseDownImage"
      class="image-compare__bg"
      :class="greyed ? 'image-compare__bg--greyed' : null"
    />

    <img
      :src="mutableBefore_2"
      :style="dimensions_samurai_after"
      alt="before"
      class="image-compare__samurai"
      @mousedown.prevent="onMouseDownImage"
    />

    <!-- handle -->
    <div
      v-if="!hideHandle"
      v-show="!hideAfter"
      :style="{ left: posX + 'px' }"
      class="handle"
      :class="disabled ? 'disabled' : null"
      @mousedown.prevent="onMouseDownHandle"
      @mouseup.prevent="onMouseUpHandle"
      @touchmove.prevent="touchCompareAction()"
    >
      <template>
        <span
          class="handle-icon"
          :class="greyed ? 'handle-icon--pulsation' : null"
          @mouseover="initCompare()"
        ></span>
      </template>
    </div>

    <div
      class="image-compare__range range container-fluid"
      :class="[disabled ? 'disabled' : null]"
    >
      <div
        class="range__left"
        @click.prevent="!disabled ? $emit('reachedLeft') : null"
      >
        {{ $t("publisher") }}
        <svg
          width="24"
          height="11"
          viewBox="0 0 24 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            opacity="0.5"
            x1="9"
            y1="5.67871"
            x2="10"
            y2="5.67871"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            opacity="0.5"
            x1="14"
            y1="5.67871"
            x2="23"
            y2="5.67871"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            opacity="0.5"
            d="M8 1.67871L1 5.67871L8 9.67871"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        class="range__right"
        @click.prevent="!disabled ? $emit('reachedRight') : null"
      >
        {{ $t("advertiser") }}
        <svg
          width="24"
          height="11"
          viewBox="0 0 24 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            opacity="0.5"
            x1="15"
            y1="5.67871"
            x2="14"
            y2="5.67871"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            opacity="0.5"
            x1="10"
            y1="5.67871"
            x2="1"
            y2="5.67871"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            opacity="0.5"
            d="M16 9.67871L23 5.67871L16 1.67871"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </figure>
</template>

<script>
/* eslint-disable no-console */
export default {
  props: {
    before: {
      type: String,
      default: "https://image-compare.netlify.com/assets/before.jpg",
    },
    after: {
      type: String,
      default: "https://image-compare.netlify.com/assets/after.jpg",
    },
    before_2: {
      type: String,
      default: "https://image-compare.netlify.com/assets/before.jpg",
    },
    after_2: {
      type: String,
      default: "https://image-compare.netlify.com/assets/after.jpg",
    },
    preImg: {
      type: String,
      default: "",
    },
    full: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Object,
      required: false,
      default() {
        return {
          left: 0,
          right: 0,
        };
      },
    },
    labels: {
      type: Object,
      required: false,
      default() {
        return {
          after: "",
          before: "",
        };
      },
    },
  },
  data() {
    return {
      width: null,
      height: null,
      pageX: null,
      pageY: null,
      posX: null,
      imgPosX: null,
      isDraggingHandle: false,
      isDraggingImage: false,
      allowNextFrame: true,
      diffX: 0,
      diffY: 0,
      shiftX: 0,
      shiftY: 0,
      mutableZoom: 1,
      mutableBefore: this.before,
      mutableAfter: this.after,
      mutableBefore_2: this.before_2,
      mutableAfter_2: this.after_2,
      greyed: true,
      showAfter: true,
      hideAfter: false,
      hideHandle: false,
    };
  },
  computed: {
    wrapperDimensions() {
      return {
        width: this.isMobile()
          ? this.imgPosX + 5 + "px"
          : this.imgPosX + 25 + "px",
      };
    },
    afterLabel() {
      return this.afterName || this.labels.after;
    },
    beforeLabel() {
      return this.beforeName || this.labels.before;
    },
    isDragging() {
      return this.isDraggingImage || this.isDraggingHandle;
    },
    dimensions() {
      const zoom = parseFloat(this.mutableZoom.toFixed(2));

      return {
        width: `${this.width}px`,
        height: this.full ? `${this.height}px` : "auto",
        transform: `scale(${zoom}) translate(${this.shiftX}px, ${this.shiftY}px)`,
      };
    },
    dimensions_samurai_before() {
      const zoom = parseFloat(this.mutableZoom.toFixed(2));

      if (this.isMobile()) {
        return {
          width: `${this.width}px`,
          height: this.full ? `${this.height}px` : "auto",
          transform: `scale(${zoom}) translate(${this.shiftX + 15}px, ${
            this.shiftY
          }px)`,
        };
      } else {
        return {
          width: `${this.width}px`,
          height: this.full ? `${this.height}px` : "auto",
          transform: `scale(${zoom}) translate(${this.shiftX + 30}px, ${
            this.shiftY
          }px)`,
        };
      }
    },
    dimensions_samurai_after() {
      const zoom = parseFloat(this.mutableZoom.toFixed(2));

      if (this.isMobile()) {
        return {
          width: `${this.width}px`,
          height: this.full ? `${this.height}px` : "auto",
          transform: `scale(${zoom}) translate(${this.shiftX + 25}px, ${
            this.shiftY
          }px)`,
        };
      } else {
        return {
          width: `${this.width}px`,
          height: this.full ? `${this.height}px` : "auto",
          transform: `scale(${zoom}) translate(${this.shiftX + 43}px, ${
            this.shiftY
          }px)`,
        };
      }
    },
    paddingTotal() {
      return this.padding.left + this.padding.right;
    },
  },
  watch: {
    reset() {
      this.shiftX = 0;
      this.shiftY = 0;
      this.setInitialPosX();
    },
    paddingTotal() {
      this.setInitialPosX();
    },
  },
  created() {
    // prepare debounced versions
    // var onWheelDebounced = this.debounce(this.onWheel, 100)
    window.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("resize", this.onResize);
    window.addEventListener("contextmenu", this.onRightClick);
    window.addEventListener("dragenter", this.onDragEnter);
    // window.addEventListener('dragleave', this.onDragLeave)
    window.addEventListener("dragover", this.onDragOver);
    window.addEventListener("drop", this.onDrop);
  },
  mounted() {
    this.$el.addEventListener("wheel", this.onWheel);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("resize", this.onResize);
    this.$el.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("contextmenu", this.onRightClick);
    window.removeEventListener("dragenter", this.onDragEnter);
    // window.removeEventListener('dragleave', this.onDragLeave)
    window.removeEventListener("dragover", this.onDragOver);
    window.removeEventListener("drop", this.onDrop);
  },
  methods: {
    onResize() {
      this.width = this.$el.clientWidth;
      this.height = this.$el.clientHeight;
      this.setInitialPosX();
    },
    initCompare() {
      this.greyed = false;
      this.$emit("initiated");
    },
    pauseCompare() {
      console.log("stop");
      this.greyed = true;
      this.$emit("paused");
    },
    // mouse
    onMouseDownHandle() {
      this.$emit("movement");
      this.isDraggingHandle = true;
    },
    onMouseUpHandle() {
      this.isDraggingHandle = false;
      
      var right_border =
        this.$el.getBoundingClientRect().right -
        this.$el.getBoundingClientRect().right / 2 +
        100;
      var left_border =
        this.$el.getBoundingClientRect().right -
        this.$el.getBoundingClientRect().right / 2 -
        100;

      if (this.posX >= right_border) {
        this.$emit("reachedRight");
      } else if (this.posX <= left_border) {
        this.$emit("reachedLeft");
      }
    },
    touchCompareAction() {
      this.initCompare();
      this.onMouseDownHandle();
    },
    onMouseDownImage() {
      if (this.isDraggable) {
        this.isDraggingImage = true;
        this.$emit("movement");
      }
    },
    onMouseUp(event) {
      // console.log('in mouse up', event)
      event.preventDefault();
      this.isDraggingHandle = false;
      this.isDraggingImage = false;
      this.pageX = null;
      this.pageY = null;
      if (event.button === 1) {
        this.onWheelClick();
      }
    },
    onMouseMove(event, isDragging = false) {
      if (!this.greyed) {
        this.$emit("movement");

        if (event && event.type === "click" && this.isDraggable) return;

        if (event && this.allowNextFrame && (this.isDragging || isDragging)) {
          this.allowNextFrame = false;

          var pageX = event.pageX;
          var pageY = event.pageY;

          if (event.targetTouches) {
            pageX = event.targetTouches[0].pageX;
            pageY = event.targetTouches[0].pageY;
          } else if (event.originalEvent && event.originalEvent.targetTouches) {
            pageX = event.originalEvent.targetTouches[0].pageX;
            pageY = event.originalEvent.targetTouches[0].pageY;
          }

          this.diffX = this.pageX ? pageX - this.pageX : 0;
          this.diffY = this.pageY ? pageY - this.pageY : 0;

          this.pageX = pageX;
          this.pageY = pageY;

          window.requestAnimationFrame(this.updatePos);
        }
      }
    },

    // position
    updatePos() {
      if (!this.isDraggable || (this.isDraggable && this.isDraggingHandle)) {
        let posX = this.pageX - this.$el.getBoundingClientRect().left;
        let imgPosX = this.$el.getBoundingClientRect().right - this.pageX;
        const pr = this.padding.right;
        const pl = this.padding.left;

        if (posX < pl) {
          posX = pl;
        } else if (posX > this.width - pr) {
          posX = this.width - pr;
        }

        this.imgPosX = imgPosX;
        this.posX = posX;
      }

      if (this.isDraggingImage) {
        this.shiftX += this.diffX / this.mutableZoom;
        this.shiftY += this.diffY / this.mutableZoom;
      }

      this.allowNextFrame = true;
    },
    setInitialPosX() {
      if (this.paddingTotal >= this.width) {
        return console.error("Sum of paddings is wider then parent element!");
      }
      this.imgPosX = (this.width + this.padding.left - this.padding.right) / 2;
      this.posX = (this.width + this.padding.left - this.padding.right) / 2;
    },

    // wheel
    onWheel(event) {
      if (this.isZoomable) {
        // console.log('should update zoom with event', event)
        // console.log('update zoom with delta', event.deltaY)

        this.mutableZoom += -event.deltaY / 1000;

        this.$nextTick(() => {
          if (this.mutableZoom >= this.zoom.max) {
            this.mutableZoom = this.zoom.max;
          } else if (this.mutableZoom <= this.zoom.min) {
            this.mutableZoom = this.zoom.min;
          }
        });
      }
    },

    // click
    onWheelClick() {
      // will flick images quickly
      let i = 0;
      for (i = 0; i < 10; i++) {
        setTimeout(this.switchImages, i * 100);
      }

      // reset after visibility
      setTimeout(() => (this.showAfter = true), i * 100);
    },
    onRightClick(event) {
      // console.log('switching images')
      event.preventDefault();
      this.switchImages();
    },

    // helper
    debounce(func, wait, immediate) {
      let timeout;

      return function () {
        const context = this;
        const args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    switchImages() {
      this.showAfter = !this.showAfter;
    },

    // drag & drop
    onDragEnter() {
      if (this.isSwitchable) {
        console.log("onDragEnter");
        // event.preventDefault()
        this.showDropzone = true;
      }
    },
    onDragLeave(event) {
      if (this.isSwitchable) {
        console.log("onDragLeave");
        event.preventDefault();
        this.showDropzone = false;
      }
    },
    onDragOver(event) {
      if (this.isSwitchable) {
        // console.log('onDragOver')
        event.preventDefault();
        // this.showDropzone = true
      }
    },
    onDrop(event) {
      if (this.isSwitchable) {
        // console.log('onDrop', event)
        event.preventDefault();
        this.showDropzone = false;
        // console.log('drop', event)
        const files = event.dataTransfer.files;

        if (files.length === 1) {
          console.log("drop file :", files[0]);
          const x = event.x;
          const half = Math.round(window.outerWidth / 2);
          const leftSide = x <= half;
          console.log("x ?", x);
          console.log("half ?", half);
          console.log("was on left side ?", leftSide);
          this.loadFile(files[0], leftSide);
        } else {
          console.log("drop files :", files);
          this.loadFile(files[0], true);
          this.loadFile(files[1], false);
        }
        // reset zoom
        this.mutableZoom = 1;
        // reset after visibility
        this.showAfter = true;
        this.onResize();
      }
    },
    getFileName(file) {
      return file.name;
    },
    getFileSize(file) {
      return "(" + Math.round(file.size / 1024) + " Ko)";
    },
    loadFile(file, leftSide) {
      var reader = new FileReader();

      reader.onload = (event) => {
        if (leftSide) {
          this.afterName = this.getFileName(file);
          this.afterSize = this.getFileSize(file);
          this.mutableAfter = event.target.result;
        } else {
          this.beforeName = this.getFileName(file);
          this.beforeSize = this.getFileSize(file);
          this.mutableBefore = event.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    log: function (event) {
      console.log(event);
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/variables";

@keyframes pulsate {
  from {
    transform: translate(-50%, -50%) scale(0.8);
  }

  to {
    transform: translate(-50%, -50%) scale(1);
    background-color: #bf1f3c;
  }
}

.image-compare {
  position: relative;
  overflow: hidden;
  margin: 0;

  &__samurai {
    object-fit: contain !important;
  }

  &__bg {
    transition: 2s filter;
    filter: none;
    &--greyed {
      filter: grayscale(1) brightness(0.35);
      transition: 2s filter;
    }
  }
}

.after-name,
.before-name {
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
  background-color: white;
}

.after-name .size,
.before-name .size {
  font-family: monospace;
  font-size: 1.2rem;
  margin-top: 2px;
  color: gray;
}

.after-name {
  z-index: 5;
  left: 0;
  border-top-right-radius: 0.75rem;
}

.before-name {
  right: 0;
  border-top-left-radius: 0.75rem;
}

.before-name .size {
  text-align: right;
}

img {
  display: block;
  max-width: none;
}

.drop-zone {
  font-size: 50px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  color: white;
  background-color: rgba(black, 0.5);
}

.drop-zone.visible {
  pointer-events: all;
  opacity: 1;
}

.image-compare.full {
  overflow: hidden;
  flex: 1;
  width: 100%;
  height: 100%;
}

.image-compare.full img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper,
.handle {
  position: absolute;
  top: 0;
  bottom: 0;
}

.wrapper {
  z-index: 1;
  left: 0;
  overflow: hidden;
  width: 100%;
  transform: translateZ(0);
  will-change: width;
  -webkit-mask-image: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 95%,
    rgba(0, 0, 0, 0) 100%
  );

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
    height: 100%;
    backdrop-filter: blur(2px);
  }
}

.disabled {
  filter: grayscale(1);
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.6;
  transition: 300ms;

  .handle-icon {
    animation-play-state: paused;
  }
}

.handle {
  width: 10px;
  color: transparent;
  cursor: pointer;
  z-index: 100;
  transform: translateX(-50%) translateZ(0);
  will-change: left;
  transition: 300ms transform;

  &-icon {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 34px;
    height: 35px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='7' viewBox='0 0 28 7' fill='none'%3E%3Cstyle%3E.a%7Bfill:white;stroke-width:0.2;stroke:white;%7D%3C/style%3E%3Cpath d='M27 4L27 4 24.2 6.8C24.2 6.8 24.2 6.8 24.2 6.8L24.2 6.8 24.1 6.7 27 4ZM27 4C27.1 3.9 27.1 3.7 27 3.6L27 3.6M27 4L27 3.6M27 3.6L24.2 0.8 27 3.6ZM24 0.7C24.1 0.7 24.2 0.7 24.2 0.8L24 0.7ZM24 0.7C23.9 0.7 23.8 0.7 23.8 0.8 23.7 0.9 23.7 1.1 23.8 1.2L26.3 3.8 24 0.7Z' class='a'/%3E%3Cpath d='M1.2 3.7L1.2 3.7 3.8 0.7C3.8 0.7 3.8 0.7 3.8 0.7L3.8 0.7 3.9 0.8 1.2 3.7ZM1.2 3.7C1 3.8 1.1 4 1.2 4.1L1.2 4.1M1.2 3.7L1.2 4.1M1.2 4.1L4.1 6.7 1.2 4.1ZM4.4 6.8C4.3 6.8 4.2 6.8 4.1 6.7L4.4 6.8ZM4.4 6.8C4.5 6.8 4.5 6.7 4.6 6.7 4.7 6.5 4.7 6.3 4.6 6.2L1.8 3.8 4.4 6.8Z' class='a'/%3E%3Ccircle cx='14' cy='3.7' r='3' fill='white'/%3E%3C/svg%3E");
    background-color: #9f132c;
    border-radius: 50%;
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%);

    &--pulsation {
      animation: pulsate 1s ease-in-out infinite alternate-reverse;
    }
  }
}

.image-compare__range {
  position: absolute;
  bottom: 42px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  transition: 300ms;
}

.image-compare__pre-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.range {
  &::before {
    content: "";
    background-color: #fff;
    opacity: 0.3;
    height: 4px;
    width: calc(100% - 145px);
    margin: auto;
    border-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;

    @media (max-width: 598px) {
      width: calc(100% - 115px);
    }
  }

  &__left {
    font-size: rem(24px);
    color: #fff;
    position: absolute;
    top: -40px;
    left: 85px;
    cursor: pointer;

    @media (max-width: 598px) {
      font-size: rem(18px);
      left: 22px;
    }

    svg {
      position: absolute;
      left: -40px;
      bottom: -9px;

      @media (max-width: 598px) {
        left: 0;
        bottom: -18px;
      }
    }
  }

  &__right {
    font-size: rem(24px);
    color: #fff;
    position: absolute;
    top: -40px;
    right: 85px;
    cursor: pointer;

    @media (max-width: 598px) {
      font-size: rem(18px);
      right: 22px;
    }

    svg {
      position: absolute;
      right: -40px;
      bottom: -9px;

      @media (max-width: 598px) {
        right: 0;
        bottom: -18px;
      }
    }
  }
}
</style>
