<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv">
    <h1>Como tudo começou</h1>

    <p class="justificado">
      Em 2010 com a implantação do Polo Naval em Rio Grande, observou-se uma
      demanda muito grande de profissionais, habilitados em várias áreas e
      cursos técnicos para preencher as vagas oferecidas pelo Polo Naval. Tendo
      em vista que a nossa comunidade se encontrava despreparada, tornou-se
      primordial a oferta de cursos para habilitar nossa classe trabalhadora,
      sendo uma grande preocupação do poder público na época.
    </p>

    <p class="justificado">
      Já existia um grande anseio da comunidade escolar Brigadeiro José da Silva
      Paes em ofertar curso técnico na área de informática, no intuito de melhor
      preparar os jovens para ingressar no mercado de trabalho. Este modelo de
      curso foi delineado pelo então diretor Homero Fazio e sua equipe diretiva
      e pedagógica no período entre 2007 e 2010. E que com a necessidade
      emergencial vivida naquele momento pela cidade de Rio Grande, e apoio do
      poder público, o Curso de Informática tomou forma através de um
      pré-projeto, que foi muito bem aceito pela 18ª Coordenadoria de Educação
      de Rio Grande e pela SEDUC-RS. Assim a partir de 2010 se iniciou de fato a
      construção do curso técnico através da elaboração do regimento, plano de
      curso e espaço físico necessários.
    </p>
    <p class="justificado">
      Todos os trâmites legais foram realizados, como também a reforma e
      construção de um novo laboratório de informática na escola (com mobiliário
      e equipamentos). A reforma correu por conta da Gestão Doméstica da escola
      (Verba exclusiva para reforma na escola) os equipamentos foram doados pelo
      MEC em 2013/2014 como contrapartida para oferta do Curso Técnico em
      escolas públicas. Somente em 2014 foi feito edital para convocação de
      professores especialistas na área de informática.
    </p>
    <p class="justificado">
      Eu, professora Janaina Martins na época trabalhava no NTE - 18ª CRE
      (Núcleo de Tecnologia Educacional), sendo Prof(a) especialista na área de
      Tecnologia da informação e Comunicação, fui convidada pelo então Diretor
      da escola Brigadeiro José da Silva Paes Homero Fazio, em 2014 para assumir
      a Coordenação do Curso. Os demais professores seriam escolhidos através de
      Edital de Seleção, e vieram então em março de 2015 o Prof. Cleber Balotta,
      e em 2017 o Prof. José Henrique para integrar o quadro de professores. A
      primeira turma ingressou em 2015 e se formou em 2017.
    </p>
  </div>
  <div class="profsCardGroup">
    <profCard
      v-for="(prof, index) in profsList"
      :key="index"
      :prof="prof"
      :blue="index % 2 === 0"
      :up="index % 2 === 0 && index !== 0"
    />
  </div>
</template>

<script>
import profCard from "../components/profCard";
import profsList from "../assets/professores/profs";

export default {
  name: "Introducao",
  components: {
    profCard,
  },
  setup() {
    return {
      profsList,
    };
  },
};
</script>

<style scoped lang="scss">
.profsCardGroup {
  background-color: white;
  padding: 0;
}
</style>
