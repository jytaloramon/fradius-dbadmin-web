<template>
  <tr :class="rowProp.style">
    <slot></slot>
  </tr>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import type { IVTableRow } from './interfaces/IVTableRow';

export default defineComponent({
  name: 'VTableRow',
  props: {
    rowProp: {
      type: Object as PropType<IVTableRow>,
      required: true,
    },
  },
});
</script>
