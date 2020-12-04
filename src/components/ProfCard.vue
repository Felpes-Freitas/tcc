<template>
  <section :class="{ profCard: true, blueCard: blueProp, sliceUp: upProp }">
    <img
      class="profImg"
      v-once
      :src="
        require(`../assets/images/${
          imgProp.split('/')[imgProp.split('/').length - 1]
        }`)
      "
      :alt="'Foto Do(a) Professor(a) ' + profProp.name"
    />
    <article class="profDesc">
      <div class="profBio">
        <!-- <span class="profInfoName">Nome: </span> -->
        <h2 class="profInfoContent title">{{ profProp.name }}</h2>
      </div>
      <p
        v-for="({ infoName, infoContent }, index) in profProp.bio"
        :key="myIndex + '.' + index"
        class="profBio"
      >
        <span class="profInfoName">{{ infoName }}</span>
        <span
          v-for="(content, index2) in infoContent"
          :key="myIndex + '.' + index + '.' + index2"
          class="profInfoContent"
        >
          <br />
          {{ content }}
        </span>
      </p>
    </article>
  </section>
  <div></div>
</template>


<script>
import { ref } from "vue";

export default {
  name: "profCard",
  props: {
    prof: Object,
    blue: Boolean,
    up: Boolean,
    index: Number,
  },
  setup(props) {
    const profProp = ref(props.prof);
    const blueProp = ref(props.blue);
    const upProp = ref(props.up);
    const myIndex = ref(props.index);
    const imgProp = profProp.value.img;

    return {
      profProp,
      blueProp,
      upProp,
      myIndex,
      imgProp,
    };
  },
};
</script>

<style lang="scss" scoped>
.profCard {
  text-align: left;
  display: block;
  width: 100%;
  padding: 50px 10%;
  color: black;

  &.blueCard {
    background-color: rgb(0, 0, 40);
    color: white;
    padding-bottom: 200px;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);

    &.sliceUp {
      padding-bottom: 20px;
      padding-top: 200px;
      clip-path: polygon(0 0, 100% 25%, 100% 100%, 0% 100%);
    }
  }

  .profBio {
    margin: 30px;

    .title {
      margin-bottom: 80px;
    }

    .profInfoName {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  .profImg {
    width: 300px;
    height: auto;
    display: block;
    float: right;
    border-radius: 50%;
    margin: 20px 100px;
  }
}

@media screen and (max-width: 900px) {
  .profCard {
    .profImg {
      margin: 20px 25%;
      margin-bottom: 100px;
      background-color: red;
    }
  }
}

@media screen and (max-width: 700px) {
  .profCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.blueCard {
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

      &.sliceUp {
        clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
        // padding-top: 250px;
        padding-bottom: 0;
      }
    }

    .profBio {
      .title {
        text-align: center;
      }
    }

    .profImg {
      margin: 0;
      margin-bottom: 20px;
      width: 300px;
      height: auto;
      display: unset;
    }
  }
}
</style>