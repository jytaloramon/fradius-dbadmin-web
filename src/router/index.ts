import MainPage from '../views/MainPage.vue';
import UserLoginPage from '../views/UserLoginPage.vue';

import loginRouter from './login';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: UserLoginPage,
    children: loginRouter,
  },
];

export default routes;
