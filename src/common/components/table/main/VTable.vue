<template>
  <table :class="tableProp.style">
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import type { IVTable } from './interfaces/IVTable';

export default defineComponent({
  name: 'VTable',
  props: {
    tableProp: {
      type: Object as PropType<IVTable>,
      required: true,
    },
  },
});
</script>
