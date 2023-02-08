<template>
  <aside
    class="w-[240px] h-screen py-4 px-1 flex flex-col justify-between bg-neutral-900 text-neutral-300"
  >
    <div>
      <side-bar-menu-header />

      <side-bar-menu-main />
    </div>

    <side-bar-menu-footer />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBarMenuHeader from './SideBarMenuHeader.vue';
import SideBarMenuMain from './SideBarMenuMain.vue';
import SideBarMenuFooter from './SideBarMenuFooter.vue';

export default defineComponent({
  name: 'TheSideBarMenu',
  components: { SideBarMenuHeader, SideBarMenuMain, SideBarMenuFooter },
});
</script>
