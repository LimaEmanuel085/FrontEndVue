<script>
import api from "../service/api";
export default {
    data() {
        return {};
    },
    methods: {
        deleteCourse() {
            alert('Curso deletado com sucesso!')
            this.$router.push("/home");
        },
        clickNoButton() {
            this.$router.push("/home");
        }

    },
};
</script>

<template>
    <div id="conteinerButtons">
        <h1>Tem certeza</h1>
        <p>de que deseja excluir este curso ?</p>
        <br>
        <section id="buttons">
            <button id="noButton" >Não</button>

            <button id="confirmButton" @click="deleteCourse(idCourse)">
                Sim
            </button>
        </section>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#conteinerButtons{
    display: flex;
    flex-direction: column;
    width: 60vh;
    height: 50vh;
    background-color: rgb(21, 21, 73);
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

#buttons{
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
}

#noButton {
    color: #fff;
    text-decoration: none;
    background-color: #72ee2a;
    padding: 8px 12px;
    border-radius: 8px;
    display: inline-block;
    transition: transform 0.5s ease-in-out;
    border: none;
    font-size: large;
}

#confirmButton {
    font-size: large;
    color: #fff;
    text-decoration: none;
    background-color: #ee2a2a;
    padding: 8px 12px;
    border-radius: 8px;
    display: inline-block;
    transition: transform 0.5s ease-in-out;
    border: none;
}

button:hover {
    background-color: #991f1f;
    transform: scale(1.3);
}
</style>
