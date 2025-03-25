import { createRouter, createWebHistory } from 'vue-router';
import RegisterUser from './components/RegisterUser.vue';
import CourseList from './components/CourseList.vue';
import ToAddCourse from './components/ToAddCourse.vue';



const routes = [
  { path: '/', component: RegisterUser },
  { path: '/home', component: CourseList },
  { path: '/home/addCourse', component: ToAddCourse }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
