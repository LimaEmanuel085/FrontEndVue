import { createRouter, createWebHistory } from 'vue-router';
import RegisterUser from './components/RegisterUser.vue';
import CourseList from './components/CourseList.vue';
import ToAddCourse from './components/ToAddCourse.vue';



const routes = [
  { path: 'https://frontendvue-gwlz.onrender.com/', component: RegisterUser },
  { path: 'https://frontendvue-gwlz.onrender.com/home', component: CourseList },
  { path: 'https://frontendvue-gwlz.onrender.com/home/addCourse', component: ToAddCourse }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
