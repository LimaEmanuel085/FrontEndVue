<script>
import CourseTag from "./CourseTag.vue";
import api from "../service/api";
import AddCourseButton from "./AddCourseButton.vue";

export default {
    data() {
        return {
            listaCursos: [],
        };
    },
    async created() {
        let response = await api.get('https://backendcastrocursos.onrender.com/home');
        this.listaCursos = response.data;
    },
    components: { CourseTag, AddCourseButton },
};
</script>

<template>
    <div id="addButton">
        <AddCourseButton />
    </div>
    <section v-if="listaCursos.length" class="courses-container">
        <CourseTag :id-couse-tag="curso.id"
            v-for="curso in listaCursos"
            :key="curso.id"
            :image="`https://i.pinimg.com/736x/65/00/15/650015861555389db8196b4deac90ac6.jpg`"
            :name="curso.name"
            :describe="curso.describe"
            :emailAccount="curso.emailAccount"
            :passwordAccount="curso.passwordAccount"
            :link="curso.link" />
    </section>
    <p v-else>Carregando os cursos</p>  
</template>

<style scoped>
#addButton{
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}

.courses-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 1200px;
  margin: 0 auto; 
  gap: 20px;
  padding: 20px;
}

@media (min-width: 1200px) {
  .courses-container {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>