<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv description">
    <h1>Robótica</h1>
    <p class="justificado">
      Em dezembro de 2018 a SEDUC ligou para escola disponibilizando cinco kit's
      de robótica para agregar ao Curso Técnico em Informática. Montou-se então
      um grupo de estudos pioneiro chamado “Brigadeiros na Robótica” com os
      alunos:
    </p>
    <ul>
      <li>Alison Gomes Melgarejo - 2º ano</li>
      <li>Andressa Barbosa Carinha - 2º ano</li>
      <li>Beatriz Soares de Matos Bernardo - 2º ano</li>
      <li>Diana da Silva Bongalhardo - 2º ano</li>
      <li>Felipe Freitas Luvielmo - 2º ano</li>
      <li>Lucas Ferreira Hofacker - 3º ano</li>
      <li>Victor Ricardo Cavalheiro Brião - 3º ano</li>
    </ul>
    <p class="justificado">
      Orientados pelo Professor José Henrique Lopes da Silva, os resultados
      obtidos foram dois robôs e um braço mecânico autônomo que futuramente irão
      executar tarefas que ajudarão a minimizar problemas da sociedade.
    </p>
    <p class="justificado">
      Nem imaginavamos o quanto iríamos evoluir, ao ponto de qualificarmos nossa
      escola e ficarmos entre as 50 melhores do Estado no Projeto Jovem RS em
      2019 e nos destacarmos no II FESTIVAL STEAM SEDUC RS - Ciência,
      Tecnologia, Engenharia, Arte e Matemática conectando a escola ao século
      21, gerando protagonismo e autoria no mesmo ano.
    </p>
    <p class="justificado">
      Agradecimento a Direção, Professores, Colaboradores, Secretaria da
      Educação do Rio Grande do Sul, 18ª Coordenadoria Regional de Educação e em
      especial a cada aluno que acreditou em si mesmo e mostrou que é possível,
      transformar ideias em resultados.
    </p>
  </div>
  <div class="white-area">
    <slider :imgs="imgs" />
  </div>
</template>

<script>
import imgs from "../assets/slide/slide.json";
import slider from "../components/slider";

export default {
  emits: ["relative-footer", "fixed-footer"],
  components: {
    slider,
  },
  name: "Robotica",
  setup(_, { emit }) {
    emit("relative-footer");
    return {
      imgs,
    };
  },
};
</script>

<style lang="scss" scoped>
.white-area {
  background-color: white;
  height: 500px;
}

.description {
  color: white;
  padding: 20px 20%;

  h1 {
    text-align: center;
  }

  p {
    padding: 0;
  }

  ul {
    text-align: left;
  }
}
</style>
