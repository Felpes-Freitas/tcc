<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv">
    <div class="grid-block">
      <h2 class="title">Fotos</h2>
      <div class="grid">
        <div class="img-block">
          <p class="title">Turma de 2015</p>
          <img src="../assets/grid/2015.jpg" alt="turma de 2015" />
        </div>

        <div class="img-block">
          <p class="title">Turma de 2016</p>
          <img src="../assets/grid/2016.jpg" alt="turma de 2016" />
        </div>

        <div class="img-block">
          <p class="title">Turma de 2017</p>
          <img src="../assets/grid/2017.jpg" alt="turma de 2017" />
        </div>

        <div class="img-block">
          <p class="title">Turma de 2018</p>
          <img src="../assets/grid/2018.jpg" alt="turma de 2018" />
        </div>

        <div class="img-block">
          <p class="title">Turma de 2019</p>
          <img src="../assets/grid/2019.jpg" alt="turma de 2019" />
        </div>
      </div>
    </div>
    <div class="depoimentos">
      <h2 class="title">Depoimentos</h2>
      <Depoimento
        v-for="(depoimento, index) in listaDeDepoimentos"
        :key="index"
        :title="depoimento.title"
        :text="depoimento.text"
      />
    </div>
  </div>
</template>

<script>
import Depoimento from "../components/depoimento";
import listaDeDepoimentos from "../assets/depoimentos/depoimentos";

export default {
  name: "Aluno",
  components: {
    Depoimento,
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

  .depoimentos {
    border-radius: 10px;
    padding: 50px;
    padding-top: 0px;
    margin-top: 20px;
    background-color: white;
    .title {
      color: black;
      margin-bottom: 50px;
    }
  }

  .grid-block {
    background-color: white;
    border-radius: 10px;
    .title {
      color: black;
      margin: 0;
      margin-top: 20px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 20px;
      border-radius: 10px;

      .img-block {
        position: relative;
        overflow: hidden;
        margin: 4px;
        display: flex;
        justify-content: center;
        min-width: 300px;

        p {
          position: absolute;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          margin: 0;
          padding-top: 19vh;
          display: block;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s;
          text-align: center;
          font-size: 1.7rem;
          cursor: default;
        }

        img {
          display: block;
          width: auto;
          height: 300px;
          margin: 0;
          transition: all 1s;
        }

        &:hover {
          p {
            z-index: 1;
            opacity: 1;
          }
          img {
            transform: scale(1.1);
            filter: blur(2px);
            z-index: 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .floatdiv {
    .grid-block {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
