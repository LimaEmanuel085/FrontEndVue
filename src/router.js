import { createRouter, createWebHistory } from 'vue-router';
import RegisterUser from './components/RegisterUser.vue';
import CourseList from './components/CourseList.vue';
import ToAddCourse from './components/ToAddCourse.vue';
import ConfirmDelete from './components/ConfirmDelete.vue';



const routes = [
  { path: '/', component: RegisterUser },
  { path: '/home', component: CourseList },
  { path: '/home/addCourse', component: ToAddCourse },
  { path: '/home/deletePage', component: ConfirmDelete }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
