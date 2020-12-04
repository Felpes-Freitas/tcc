<template>
  <div class="slider">
    <button
      @click.prevent="
        () => {
          left();
          autoSlide = false;
        }
      "
      class="left-btn"
    >
      <svg
        class="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <defs>
          <svg:style>
            .a {
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          </svg:style>
        </defs>
        <title>Anterior</title>
        <path class="a" d="M10.146.5,4,6.646a.5.5,0,0,0,0,.708L10.146,13.5" />
      </svg>
    </button>
    <ul class="slides">
      <li
        v-for="(img, index) in images"
        :id="`slide${index}`"
        :key="`slide${index}`"
        :class="img.class"
      >
        <img :src="img.src" :alt="`${index + 1}° imagem do slide`" />
      </li>
    </ul>
    <button
      @click.prevent="
        () => {
          right();
          autoSlide = false;
        }
      "
      class="right-btn"
    >
      <svg
        class="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <defs>
          <svg:style>
            .a {
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          </svg:style>
        </defs>
        <title>Próxima</title>
        <path class="a" d="M3.854.5,10,6.646a.5.5,0,0,1,0,.708L3.854,13.5" />
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "slider",
  props: {
    imgs: Array,
  },
  setup(props) {
    const images = ref(props.imgs);
    let autoSlide = ref(true);
    let autoSlideInterval;

    onMounted(() => {
      autoSlideInterval = setInterval(() => {
        if (autoSlide.value) {
          right();
        } else {
          clearInterval(autoSlideInterval);
        }
      }, 5000);
    });

    for (let i = 0; i < images.value.length; i++) {
      images.value[i].class = {};
      if (i === 0) {
        images.value[i].class.selected = true;
        images.value[i].class.right = false;
        images.value[i].class.left = false;
      } else {
        images.value[i].class.selected = false;
        images.value[i].class.right = true;
        images.value[i].class.left = false;
      }
      images.value[i].class.slide = true;
    }

    function right() {
      const selected = document.querySelector(".selected");
      const right = document.querySelector(".right");
      if (right) {
        selected.classList.remove("selected");
        selected.classList.add("left");
        right.classList.remove("right");
        right.classList.add("selected");
      }
    }

    function left() {
      const selected = document.querySelector(".selected");
      const left = document.querySelectorAll(".left")[
        document.querySelectorAll(".left").length - 1
      ];
      if (left) {
        selected.classList.remove("selected");
        selected.classList.add("right");
        left.classList.remove("left");
        left.classList.add("selected");
      }
    }

    return {
      images,
      right,
      left,
      autoSlide,
    };
  },
};
</script>

<style lang="scss" scoped>
$dotsize: 10px;

.slider {
  display: flex;
  text-align: center;
  overflow: hidden;
  margin: 0;
  padding: 10px 5rem;
  width: 100%;
  height: 100%;

  button {
    z-index: 2;
    background-color: transparent;
    border: none;

    .svg-icon {
      display: block;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }

  .slides {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
    list-style: none;
    opacity: 1;

    .slide {
      position: absolute;
      display: flex;
      justify-content: center;
      padding: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: transform 1s, opacity 1s;
      z-index: 0;

      &.selected {
        opacity: 1;
      }

      &.left {
        transform: translateX(-100vw);
      }

      &.right {
        transform: translateX(100vw);
      }

      img {
        display: block;
        width: auto;
        height: 100%;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
      }
    }
  }
}

@media screen and(max-width:700px) {
  .slider {
    padding: 100px 5%;

    button {
      display: flex;
      align-items: flex-end;
      height: 120%;

      .svg-icon {
        display: block;
        width: 30px;
        height: 30px;
      }
    }

    .slides {
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      position: relative;
      list-style: none;
      opacity: 1;

      .slide {
        position: absolute;
        display: flex;
        justify-content: center;
        padding: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: transform 1s, opacity 1s;
        z-index: 0;

        &.selected {
          opacity: 1;
        }

        &.left {
          transform: translateX(-100vw);
        }

        &.right {
          transform: translateX(100vw);
        }

        img {
          display: block;
          width: auto;
          height: 100%;
          box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>