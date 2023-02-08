<template>
  <div class="mt-1 ml-2 mb-5 py-1 px-2 flex justify-between">
    <div>
      <span class="text-3xl underline text-green-600 font-bold italic">FR</span>
      <span class="ml-1 text-white text-xl font-semibold">DbAdmin</span>
    </div>

    <div>
      <a
        class="w-8 h-8 absolute mt-1 -ml-2 p-1 rounded-full bg-green-600 hover:bg-green-700 text-center"
      >
        <font-awesome-icon
          icon="fa-angle-double-left"
          size="xs"
          color="white"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBarMenuHeader',
});
</script>
