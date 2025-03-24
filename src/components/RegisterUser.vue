<script>
import api from "../service/api";
export default {
  methods: {
    async postUser() {
      await api.post("http://localhost:3000/", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.$router.push("/home");
    },
    exibirResultados() {
      console.log({
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <div id="conteinerRegister">
    <section id="top">
      <img src="../assets/userIcon.png" alt="" />
      <h1>Cadastrar usuário</h1>
    </section>

    <section class="dataCamp">
      <label for="name">Nome:</label>
      <input type="text" name="name" v-model="name" placeholder="Digite seu nome:" />
    </section>

    <section class="dataCamp">
      <label for="email">Email:</label>
      <input type="email" name="email" v-model="email" placeholder="Digite seu email:" />
    </section>

    <section class="dataCamp">
      <label for="password">Senha:</label>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Digite sua senha:"
      />
    </section>

    <button @click="postUser()">Enviar dados</button>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.dataCamp {
  display: flex;
  flex-direction: column;
}

#top {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 40px;
  text-align: center;
}

h1 {
  font-size: 30px;
}

input {
  height: 5vh;
  width: 100%;
  outline: none;
  border: none;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid transparent;
}

input:focus {
  border-color: #646cff;
}

label {
  font-family: "Cherry Bomb One", system-ui;
  font-size: 30px;
  text-align: start;
}

#conteinerRegister {
  display: flex;
  flex-direction: column;
  width: 40vh;
  height: 52vh;
  background-color: rgb(21, 21, 73);
  justify-content: space-around;
  border-radius: 42px;
  padding: 10%;
}

button {
  height: 8vh;
  border-radius: 10px;
  width: 100%;
}
</style>
