<template>
  <v-table :table-prop="tableData">
    <v-table-header-default />
    <v-table-body-default />
  </v-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StyleFactory from '../../factory/StyleFactory';

import VTable from '../main/VTable.vue';
import VTableHeaderDefault from './VTableHeaderDefault.vue';
import VTableBodyDefault from './VTableBodyDefault.vue';

export default defineComponent({
  name: 'VTableDefault',
  components: {
    VTable,
    VTableHeaderDefault,
    VTableBodyDefault,
  },
  data() {
    return {
      tableData: {
        style: StyleFactory.create([
          'w-full',
          'table-auto',
          'border-collapse',
          'text-left',
          'text-sm',
        ]),
      },
    };
  },
});
</script>
