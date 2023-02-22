<template>
  <div class="w-full flex">
    <the-side-bar-menu class="w-2/12" />

    <div class="w-10/12">
      <top-bar />

      <user-table />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheSideBarMenu from '../components/sidebar-menu/TheSideBarMenu.vue';
import TopBar from '../components/topbar/TopBar.vue';
import UserTable from '../components/user/UserTable.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TheSideBarMenu,
    TopBar,
    UserTable,
  },
});
</script>
