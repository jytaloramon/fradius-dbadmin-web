<template>
  <div class="w-[420px] m-auto p-6 bg-white text-gray-700 rounded-md shadow-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginModal',
});
</script>
