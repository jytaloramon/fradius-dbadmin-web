<template>
  <v-table-header-item :header-item-prop="headerItemProp">
    <template v-slot:left>
      <span :class="headerItemProp.boxCheckbox.style">
        <input
          type="checkbox"
          :value="headerItemProp.isChecked"
          @input="(event) => $emit('input', event.target?.value)"
        />
      </span>
    </template>
  </v-table-header-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import VTableHeaderItem from './VTableHeaderItem.vue';
import type { IVTableHeaderItemLeftCheckbox } from './interfaces/IVTableHeaderItemLeftCheckbox';

export default defineComponent({
  name: 'VTableHeaderItemLeftCheckbox',
  props: {
    headerItemProp: {
      type: Object as PropType<IVTableHeaderItemLeftCheckbox>,
      required: true,
    },
  },
  components: {
    VTableHeaderItem,
  },
});
</script>
