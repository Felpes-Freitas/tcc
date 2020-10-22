<template>
  <div class="backgroundImg"></div>
  <div class="contact-container">
    <form
      @submit="clearAllInputs()"
      action="mailto:nethergamer123321@gmail.com"
      class="contact-form"
    >
      <h1 class="form-title">Entre Em Contato:</h1>
      <p class="input-wraper">
        <label
          :class="{ 'input-lbl': true, up: name !== '' }"
          id="name-lbl"
          for="name"
        >
          Nome:
        </label>
        <input v-model="name" required id="name" type="text" />
      </p>
      <p class="input-wraper">
        <label
          :class="{ 'input-lbl': true, up: phone !== '' }"
          id="phone-lbl"
          for="phone"
        >
          Telefone:
        </label>
        <input v-model="phone" required id="phone" type="tel" />
      </p>
      <p class="input-wraper">
        <label
          :class="{ 'input-lbl': true, up: email !== '' }"
          id="email-lbl"
          for="email"
        >
          E-mail:
        </label>
        <input v-model="email" required id="email" type="email" />
      </p>
      <p class="input-wraper">
        <label for="message">Mensagem:</label>
        <br />
        <br />
        <textarea
          v-model="message"
          :class="{ filled: message !== '' }"
          required
          name="msg"
          id="message"
          cols="30"
          rows="10"
        >
        </textarea>
      </p>
      <button>Enviar</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Contato",
  emits: ["relative-footer"],
  setup(_, { emit }) {
    emit("relative-footer");
    const name = ref("");
    const phone = ref("");
    const email = ref("");
    const message = ref("");

    function clearAllInputs() {
      name.value = "";
      phone.value = "";
      email.value = "";
      message.value = "";
    }

    return {
      name,
      phone,
      email,
      message,
      clearAllInputs,
    };
  },
};
</script>

<style scoped lang="scss">
$darkBlueColor: rgb(0, 0, 40);
$darkRedColor: rgb(116, 0, 0);

.contact-container {
  background-color: white;
  display: block;
  width: 60vw;
  height: 100vh;
  padding-top: 50px;
  box-shadow: 0px 0px 10px black;
  clip-path: polygon(0 0, 53% 0, 100% 100%, 0% 100%);

  .contact-form {
    background-color: rgba(0, 0, 0, 0);
    display: block;
    margin-top: 5vh;
    margin-left: 4vw;
    width: 30vw;
    padding: 20px;
    overflow-y: auto;

    * {
      font-size: 0.9rem;
      color: black;
    }

    .form-title {
      margin: 0;
      margin-bottom: 5vh;
      font-size: 1.3rem;
      text-align: center;
    }

    .input-wraper {
      background-color: rgba(0, 0, 0, 0);
      margin-bottom: 50px;

      &:hover .input-lbl {
        transform: translateY(-5px);
      }

      .input-lbl {
        display: block;
        float: left;
        margin-left: 2px;
        transform: translateY(20px);
        transition: transform 0.5s;
        background-color: transparent;

        &.up {
          transform: translateY(-5px);
        }
      }

      input {
        border: none;
        background-color: transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        // border-color: white;
        display: block;
        position: relative;
        width: 100%;

        //removing autofill styles
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px white inset;
        }

        &:empty {
          background-color: transparent;
        }
      }

      textarea {
        display: block;
        width: 100%;
        min-height: 25px;
        height: 25px;
        max-height: 120px;
        position: relative;
        overflow: hidden;
        resize: none;
        background-color: rgba(0, 0, 0, 0);
        transition: height 0.5s;

        &.filled {
          height: 80px;
          overflow: auto;
        }

        &:hover,
        &:focus {
          height: 80px;
        }
      }
    }

    button {
      display: block;
      margin-top: -40px;
      margin-left: auto;
      background-color: $darkRedColor;
      color: white;
      border: none;
      padding: 5px 10px;
    }
  }
}

@media screen and (max-height: 500px) {
  .contact-container {
    box-shadow: none;
  }
}

@media screen and(max-width:700px) {
  .contact-container {
    clip-path: unset;
    width: 100%;

    .contact-form {
      width: 100%;
      margin: 0;
      margin-top: 5vh;
      padding: 0 10vw;
      padding-top: 10px;
      overflow: initial;

      * {
        font-size: 1rem;
      }
    }
  }
}
</style>