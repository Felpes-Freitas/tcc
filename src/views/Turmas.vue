<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv">
    <h1>Organização Curricular</h1>
    <p class="justificado">
      A Educação Profissional Técnica Integrado ao Ensino Médio funciona em
      regime anual, com todos os componentes curriculares anuais, organizada por
      série com duração de 3 (três) anos com carga horária total de 4.560 horas.
    </p>
    <h2>Formação Básica</h2>
    <ul class="formacao">
      <li>Linguagens e suas Tecnologias</li>
      <li>Matemática e suas Tecnologias</li>
      <li>Ciências Humanas e Sociais Aplicadas</li>
      <li>Ciências a Natureza e suas Tecnologias</li>
    </ul>
    <ul class="prettyList">
      <h2>Formação Técnica</h2>
      <router-link :to="{ path: '/tecnico/1' }">
        <li>
          <h2>Técnico 1</h2>
        </li>
      </router-link>
      <router-link :to="{ path: '/tecnico/2' }">
        <li>
          <h2>Técnico 2</h2>
        </li>
      </router-link>
      <router-link :to="{ path: '/tecnico/3' }">
        <li>
          <h2>Técnico 3</h2>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Turmas",
  emits: ["fixed-footer", "relative-footer"],
  beforeMount() {
    if (window.innerWidth >= 700) {
      this.$emit("relative-footer");
    }
  },
  beforeUpdate() {
    if (window.innerWidth >= 700) {
      this.$emit("relative-footer");
    }
  },
};
</script>

<style lang="scss" scoped>
.formacao {
  padding: 0;
  margin: 0;
  list-style: none;
}
.prettyList {
  margin-top: 50px;
}
</style>
