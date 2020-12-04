<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv">
    <h1 class="titulo">
      Bem Vindo ao Curso Técnico em Informática da Escola Estadual Silva Paes!
    </h1>
    <p class="justificado">
      Aqui você conhecerá um pouco sobre o desenvolvimento do curso Técnico em
      Informática Integrado ao Ensino Médio dentro da escola, com uma breve
      apresentação dos conteúdos abordados durante o período do curso e as
      principais atividades extra curriculares realizadas durante esta
      trajetória. Além disso, você também poderá acompanhar através de muitas
      fotos e comentários de ex-alunos e alunos que ainda estão a concluir ao
      curso de técnico.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  emits: ["fixed-footer", "relative-footer"],
  beforeMount() {
    if (window.innerWidth >= 700) {
      this.$emit("fixed-footer");
    } else {
      this.$emit("relative-footer");
    }
  },
  beforeUpdate() {
    if (window.innerWidth >= 700) {
      this.$emit("fixed-footer");
    } else {
      this.$emit("relative-footer");
    }
  },
};
</script>
