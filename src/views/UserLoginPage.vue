<template>
  <the-log-in />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheLogIn from '../components/login/TheLogIn.vue';

export default defineComponent({
  name: 'UserLoginPage',
  components: {
    TheLogIn,
  },
});
</script>
