<template>
  <header class="cabecalho">
    <router-link
      @click="setVisible(false)"
      class="logo"
      :to="'/'"
    ></router-link>
    <nav :class="{ navbar: true, visible }">
      <ul>
        <li v-for="(route, index) in visibleRoutes" :key="index">
          <router-link :to="route.path" @click="setVisible(false)">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <button
      @click.prevent="showHideNav"
      :class="{ mobile: true, navBtn: true, change: visible }"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </button>
  </header>
  <div class="content">
    <router-view @relative-footer="relativeFooter()" />
  </div>
  <footer class="rodape">
    <p>Escola Estadual De Ensino Médio Brigadeiro José Da Silva Paes</p>
  </footer>
</template>

<script>
import { ref, computed, watch } from "vue";
import router from "@/router";

export default {
  name: "App",
  setup() {
    const visible = ref(false);

    function relativeFooter() {
      const footer = document.querySelector(".rodape");
      footer.style.position = "relative";
    }

    function fixedFooter() {
      const footer = document.querySelector(".rodape");
      footer.style.position = "fixed";
      footer.style.bottom = "0";
    }

    watch(router.currentRoute, () => {
      fixedFooter();
    });

    const visibleRoutes = computed(() => {
      const vRoutes = [];
      router.options.routes.forEach((route) => {
        if (route.notListed) {
          return;
        }
        vRoutes.push(route);
      });
      return vRoutes;
    });

    function setVisible(bool) {
      visible.value = bool;
    }

    function showHideNav() {
      setVisible(!visible.value);
    }

    return {
      visible,
      showHideNav,
      setVisible,
      visibleRoutes,
      fixedFooter,
      relativeFooter,
    };
  },
};
</script>

<style lang="scss">
$darkBlueColor: rgb(0, 0, 40);
$darkRedColor: rgb(116, 0, 0);

@mixin darker {
  color: white;
}

@mixin darkRed {
  @include darker;
  background-color: $darkRedColor;
}

@mixin darkBlue {
  @include darker;
  background-color: $darkBlueColor;
}

* {
  box-sizing: border-box;
  font-family: "Roboto", arial;
  outline: none;
}

html {
  position: relative;
  font-size: 14pt;
  min-height: 100%;
}

body {
  background-color: white;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow-x: hidden;
}

.backgroundImg {
  content: "";
  z-index: -1;
  background-image: url("assets/images/parallaximg.png");
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  // width: 100%;
  // height: 100%;
  /*filter to darken the img*/
  filter: brightness(40%); //blur(2px);
  /* Parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.mobile {
  display: none;
}

.cabecalho {
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 0;
  background-color: rgb(116, 0, 0);
}

.logo {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  min-width: 80px;
  min-height: 100%;
  margin-right: auto;
  background-image: url("assets/images/brasao_2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
}

.navbar {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 726px;
  height: 50px;

  ul {
    display: inline-block;
    height: 100%;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      height: 100%;
      padding: 0;
      margin: 0;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        height: 100%;
        margin: 0px;
        font-size: 1.3rem;
        transition: background-color 0.3s;

        &:hover {
          background-color: rgb(170, 0, 0) /*rgb(0,0,50);*/;
          text-shadow: 0px 0px 10px white;
        }
      }
    }
  }
}

a {
  text-decoration: none;
  color: white;
}

.prettyList {
  list-style-type: none;
  padding: 0px;
  display: inline-block;

  li {
    padding: 20px;
    margin: 10px;
    display: inline-block;
    transition: background-color 0.5s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

/*Background img with parralax and filters*/

.content {
  .floatdiv {
    margin: 100px 0;
    position: relative;
    width: 100%;
    padding: 0 10%;
    text-align: center;
    color: white;
    margin-bottom: 100px;
  }
}

.titulo {
  font-size: 2rem;
}

.justificado {
  text-align: justify;
  text-indent: 20px;
  margin: 10px 0;
  font-size: 1rem;
  padding: 0 40px;
  color: white;
}

.rodape {
  display: flex;
  justify-content: center;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  bottom: 0px;
  padding: 20px 10px;
  text-align: center;
  font-size: 0.8rem;
  width: 100%;
  height: 100px;
  margin: 0;
  background-color: $darkBlueColor;
}

@media screen and(max-height:500px) {
  .rodape {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .navbar {
    ul {
      li {
        a {
          padding: 0 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  html {
    font-size: 12pt;
  }

  .mobile {
    display: initial;
  }

  .cabecalho {
    justify-content: flex-end;
    height: 50px;

    .navBtn {
      margin: 0 20px;
      z-index: 2;
      background: none;
      border: none;
      display: inline-block;
      cursor: pointer;

      .bar1,
      .bar2,
      .bar3 {
        width: 30px;
        height: 3px;
        background-color: white;
        margin: 6px 0;
        transition: 0.4s;
      }

      &.change {
        .bar1 {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
          transform: rotate(-45deg) translate(-6.5px, 6.5px);
        }

        .bar2 {
          opacity: 0;
        }

        .bar3 {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-6.5px, -6.5px);
        }
      }
    }

    .navbar {
      position: fixed;
      display: flex;
      flex-direction: column;
      width: 0;
      height: 100%;
      top: 50px;
      min-width: 0;
      background-color: rgb(116, 0, 0);
      transition: width 0.5s ease;
      z-index: 3;

      ul {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        opacity: 0%;
        transition: opacity 0.5s ease;
        li {
          height: 10ex;
        }
      }

      &.visible {
        overflow: hidden;
        width: 100%;
        ul {
          opacity: 100%;
        }
      }
    }
  }

  .rodape {
    position: relative;
  }
}
</style>
