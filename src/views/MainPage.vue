<template>
  <div>
    <the-side-bar-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheSideBarMenu from '../components/sidebar-menu/TheSideBarMenu.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TheSideBarMenu,
  },
});
</script>
