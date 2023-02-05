<template>
  <the-sign-in></the-sign-in>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheSignIn from '../components/login/TheSignIn.vue';

export default defineComponent({
  name: 'UserLoginPage',
  components: {
    TheSignIn,
  },
});
</script>
