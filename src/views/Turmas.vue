<template>
  <div class="backgroundImg"></div>
  <div class="floatdiv">
    <ul class="prettyList">
      <router-link :to="{ path: '/tecnico/1' }">
        <li>
          <h1>Técnico 1</h1>
        </li>
      </router-link>
      <router-link :to="{ path: '/tecnico/2' }">
        <li>
          <h1>Técnico 2</h1>
        </li>
      </router-link>
      <router-link :to="{ path: '/tecnico/3' }">
        <li>
          <h1>Técnico 3</h1>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Turmas",
  emits: ["relative-footer"],
};
</script>
