import type { RouteRecordRaw } from 'vue-router';

import TheLoginSignIn from '../components/login/TheLoginSignIn.vue';
import TheLoginRecoverPassword from '../components/login/TheLoginRecoverPassword.vue';

const routes: RouteRecordRaw[] = [
  { path: '', component: TheLoginSignIn },
  { path: 'recover', component: TheLoginRecoverPassword },
];

export default routes;
