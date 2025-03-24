<script>
import api from "../service/api";
export default {
  data() {
    return {};
  },
  methods: {
    async deleteCourse(id) {
      await api.delete(`/home/${id}`, {
        id,
      });
      location.reload()
    },
    
  },
  props: {
    idCourse: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button @click="deleteCourse(idCourse)">
    <img
      width="50"
      height="50"
      src="https://img.icons8.com/ios-filled/50/waste.png"
      alt="waste"
    />
  </button>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

button {
  color: #fff;
  text-decoration: none;
  background-color: #ee2a2a;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 10px;
  transition: transform 0.5s ease-in-out;
  border: none;
}

button:hover {
  background-color: #991f1f;
  transform: scale(1.3);
}
</style>
