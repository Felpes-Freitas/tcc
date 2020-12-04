<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv">
    <h1>Técnico {{ currentClass.id }}</h1>
    <section
      v-for="(infos, index) in currentClass.infos"
      :key="index"
      class="turmaInfos"
    >
      <h2 class="infoTitle">{{ infos.title }}</h2>
      <ul>
        <li v-for="(info, index2) in infos.info" :key="index2">
          <p :class="{ justificado: index > 0 }">{{ info }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import turmasData from "../assets/turmas/turmas";

export default {
  name: "turmaView",
  props: {
    id: Number,
  },
  emits: ["relative-footer"],
  setup(props) {
    const _id = ref(props.id);
    const currentClass = ref(turmasData[_id.value - 1]);
    return {
      currentClass,
    };
  },
};
</script>

<style lang="scss" scoped>
.turmaInfos {
  .infoTitle {
    margin: 0;
    margin-top: 30px;
    padding: 0;
    display: inline-block;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    // display: inline;

    // li {
    //   &::before {
    //     content: " ";
    //   }

    //   display: inline;
    //   margin: 0;

    //   &::after {
    //     content: ",";
    //   }
    // }
  }
}
</style>