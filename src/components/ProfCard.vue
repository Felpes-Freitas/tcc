<template>
  <section :class="{ profCard: true, blueCard: blueProp, sliceUp: upProp }">
    <img
      class="profImg"
      :src="profProp.img"
      :alt="'Foto Do(a) Professor(a) ' + profProp.name"
    />
    <article class="profDesc">
      <p class="profBio">
        <span class="profInfoName">Nome: </span>
        <span class="profInfoContent">{{ profProp.name }}</span>
      </p>
      <p
        v-for="({ infoName, infoContent }, index) in profProp.bio"
        :key="myIndex + '.' + index"
        class="profBio"
      >
        <span class="profInfoName">{{ infoName }}:</span>
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
  name: "ProfCard",
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
    console.log(profProp.value);
    return {
      profProp,
      blueProp,
      upProp,
      myIndex,
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

    .profInfoName {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  .profImg {
    display: block;
    float: right;
    margin: 20px;
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

    .profImg {
      width: 300px;
      display: unset;
    }
  }
}
</style>