import { createRouter, createWebHistory } from 'vue-router';
import RegisterUser from './components/RegisterUser.vue';
import CourseList from './components/CourseList.vue';
import ToAddCourse from './components/ToAddCourse.vue';



const routes = [
  { path: '/', component: RegisterUser },
  { path: '', component: CourseList },
  { path: '', component: ToAddCourse }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
