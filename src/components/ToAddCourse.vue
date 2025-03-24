<script>
import api from "../service/api"
export default {
    data() {
        return {
            image: "",
            name: "",
            describe: "",
            emailAccount: "",
            passwordAccount: "",
            link: "",
        };
    },
    methods: {
        async postCourse() {
            await api.post("/home", {
                name: this.name,
                emailAccount: this.emailAccount,
                passwordAccount: this.passwordAccount,
                image: this.image,
                link: this.link,
                describe: this.describe

            });
            this.$router.push("/home");
        },
    },
};
</script>

<template>
    <div class="formContainer">
        <h1>Adicionar Curso</h1>
        <div class="inputGroup">
            <label>Imagem (URL):</label>
            <input type="text" v-model="image" placeholder="Cole a URL da imagem" />
        </div>

        <div class="inputGroup">
            <label>Nome:</label>
            <input type="text" v-model="name" placeholder="Digite seu nome" />
        </div>

        <div class="inputGroup">
            <label>Descrição:</label>
            <textarea v-model="describe" placeholder="Escreva uma descrição"></textarea>
        </div>

        <div class="inputGroup">
            <label>Email:</label>
            <input type="email" v-model="emailAccount" placeholder="Digite seu email" />
        </div>

        <div class="inputGroup">
            <label>Senha:</label>
            <input type="password" v-model="passwordAccount" placeholder="Digite sua senha" />
        </div>

        <div class="inputGroup">
            <label>Link:</label>
            <input type="text" v-model="link" placeholder="Cole um link relacionado" />
        </div>

        <button @click="postCourse">Adicionar</button>
    </div>
</template>

<style scoped>
.formContainer {
    max-width: 80%;
    width: 65vh;
    margin: auto;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(21, 21, 73);

}


h1 {
    font-size: 24px;
}


.inputGroup {
    width: 80%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

label {
    font-family: "Cherry Bomb One", system-ui;
    font-size: 20px;
    text-align: start;
}

input,
textarea {
    height: 3vh;
    width: 100%;
    outline: none;
    border: none;
    padding: 6px;
    border-radius: 4px;
    border: 1px solid transparent;
}

textarea {
    resize: none;
    height: 80px;
}

button {
    height: 6vh;
    border-radius: 10px;
    width: 100%;
    transition: transform 0.5s ease-in-out;
}

button:hover {
    background: #0056b3;
    transform: scale(1.05);
}
</style>
