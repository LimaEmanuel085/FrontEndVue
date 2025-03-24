<script>
export default {
  data() {
    return {};
  },
  methods: {
    goAddView() {
        this.$router.push("/home/addCourse");
    },
  },

};
</script>

<template>
  <button @click="goAddView">
    <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/add.png" alt="add"/>
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
  transition: transform 0.5s ease-in-out;
  top: 10px;
  left: 10px;
}

img{
    height: 50px;
    width: 50px;
}

button:hover {
  transform: scale(1.3);
}
</style>
