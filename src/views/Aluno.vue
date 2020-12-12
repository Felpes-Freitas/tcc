<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv">
    <Depoimento
      v-for="(depoimento, index) in listaDeDepoimentos"
      :key="index"
      :title="depoimento.title"
      :text="depoimento.text"
    />
  </div>
</template>

<script>
import Depoimento from "../components/depoimento";
import listaDeDepoimentos from "../assets/depoimentos/depoimentos";

export default {
  name: "Aluno",
  emits: ["fixed-footer", "relative-footer"],
  components: {
    Depoimento,
  },
  beforeMount() {
    if (window.innerWidth < 700) {
      this.$emit("fixed-footer");
    } else {
      this.$emit("relative-footer");
    }
  },
  beforeUpdate() {
    if (window.innerWidth < 700) {
      this.$emit("fixed-footer");
    } else {
      this.$emit("relative-footer");
    }
  },
  setup() {
    return {
      listaDeDepoimentos,
    };
  },
};
</script>

<style lang="scss" scoped>
.floatdiv {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
