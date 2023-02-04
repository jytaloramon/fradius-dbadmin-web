<template>
  <div>
    <the-side-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheSideMenu from '../components/sidebar-menu/TheSideMenu.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TheSideMenu,
  },
});
</script>
