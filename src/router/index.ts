import MainPage from '../views/MainPage.vue';
import UserLoginPage from '../views/UserLoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: UserLoginPage,
  },
];

export default routes;
