<script>
import DeleteButton from './DeleteButton.vue';
export default {
  props: {
    idCouseTag: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: "../assets/shika.png",
      required: true,
    },
    link: {
      type: String,
      default: "Link padrão",
      required: true,
    },
    describe: {
      type: String,
      default: "Descrição padrão",
      required: true,
    },
    passwordAccount: {
      type: String,
      default: "Senha padrão",
      required: true,
    },
    emailAccount: {
      type: String,
      default: "Email padrão",
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: "Valor padrão",
    },
  },
  components: { DeleteButton }
};
</script>

<template>
  <section class="courseCard">
    <img :src="image" alt="thumb do curso">
    <hr>
    <h1>{{ name }}</h1>
    <hr>
    <p>{{ describe }}</p>
    <hr>
    <section class="account-data">

      <div class="account-part">
        <h2>Email:</h2>
        <p>{{ emailAccount }}</p>
      </div>

      <div class="account-part">
        <h2>Senha:</h2>
        <p>{{ passwordAccount }}</p>
      </div>

    </section>
    <span id="buttons"><a :href="link">Link aqui</a> <DeleteButton :id-course="idCouseTag"/></span>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

hr{
  width: 100%;
}

.courseCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(65, 69, 71);
  padding: 20px;
  height: auto;
  width: 40vh;
  max-width: 300px;
  border-radius: 15px;
  justify-content: space-between;
  text-align: center;
  color: white;
  transition: transform 0.3s ease-in-out;
}

.courseCard:hover {
  transform: scale(1.05);
}

img {
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid rgb(80, 65, 167);
}

.account-data {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}

.account-part {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#buttons{
  display: flex;
  width: 100%;
  justify-content: space-around;
}

a {
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  transition: transform 0.5s ease-in-out;
}

a:hover {
  background-color: #0056b3;
  transform: scale(1.3);
}
</style>