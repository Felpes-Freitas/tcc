<template>
  <div class="backgroundImg"></div>
  <div></div>
</template>

<script>
export default {
  name: "Aluno",
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
