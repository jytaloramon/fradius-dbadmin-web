<template>
  <th :class="headerItemProp.style">
    <slot name="left"></slot>

    <span :class="headerItemProp.boxText.style">
      {{ headerItemProp.boxText.text }}
    </span>

    <slot name="right"></slot>
  </th>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import type { IVTableHeaderItem } from './interfaces/IVTableHeaderItem';

export default defineComponent({
  name: 'VTableHeaderItem',
  props: {
    headerItemProp: {
      type: Object as PropType<IVTableHeaderItem>,
      required: true,
    },
  },
});
</script>
