<template>
  <article>
    <h3>{{ cardTitle }}</h3>

    <p class="justificado">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <defs>
          <svg:style>
            .b {
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          </svg:style>
        </defs>
        <title>aspas</title>
        <path class="b" d="M4.077,7.253a3.844,3.844,0,0,1,0-4.025" />
        <circle class="b" cx="4.447" cy="6.918" r="0.5" />
        <path class="b" d="M1.067,7.253a3.844,3.844,0,0,1,0-4.025" />
        <circle class="b" cx="1.437" cy="6.918" r="0.5" />
        <path class="b" d="M9.923,6.747a3.844,3.844,0,0,1,0,4.025" />
        <circle class="b" cx="9.553" cy="7.082" r="0.5" />
        <path class="b" d="M12.933,6.747a3.844,3.844,0,0,1,0,4.025" />
        <circle class="b" cx="12.563" cy="7.082" r="0.5" />
      </svg>
      {{ cardText }}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <defs>
          <svg:style>
            .b {
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          </svg:style>
        </defs>
        <title>aspas</title>
        <path class="b" d="M4.077,7.253a3.844,3.844,0,0,1,0-4.025" />
        <circle class="b" cx="4.447" cy="6.918" r="0.5" />
        <path class="b" d="M1.067,7.253a3.844,3.844,0,0,1,0-4.025" />
        <circle class="b" cx="1.437" cy="6.918" r="0.5" />
        <path class="b" d="M9.923,6.747a3.844,3.844,0,0,1,0,4.025" />
        <circle class="b" cx="9.553" cy="7.082" r="0.5" />
        <path class="b" d="M12.933,6.747a3.844,3.844,0,0,1,0,4.025" />
        <circle class="b" cx="12.563" cy="7.082" r="0.5" />
      </svg>
    </p>
  </article>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Depoimento",
  props: {
    title: String,
    text: String,
  },
  setup(props) {
    const cardTitle = ref(props.title);
    const cardText = ref(props.text);

    return {
      cardTitle,
      cardText,
    };
  },
};
</script>

<style lang="scss" scoped>
article {
  background-color: white;
  padding: 20px;
  margin: 20px 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;

  svg {
    display: inline-block;
    opacity: 0.5;
    width: 20px;
    height: auto;
  }

  p,
  h3 {
    color: black;
  }
}
</style>