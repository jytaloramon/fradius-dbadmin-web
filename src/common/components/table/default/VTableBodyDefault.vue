<template>
  <tbody>
    <v-table-row v-for="(d, idx) in datas" :key="idx" :row-prop="rowData">
      <td class="p-3">
        <input type="checkbox" v-model="d.isSelected" />
      </td>
      <td class="py-4 px-3">{{ d.username }}</td>
      <td class="py-4 px-3">{{ d.lastLogin }}</td>
      <td class="py-4 px-3">{{ d.isActive ? 'Yes' : 'No' }}</td>
      <td class="py-4 px-3 float-right">
        <span class="p-1">
          <button type="button">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
        </span>

        <span class="p-1">
          <button type="button">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </span>
      </td>
    </v-table-row>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VTableRow from '../main/VTableRow.vue';
import StyleFactory from '../../factory/StyleFactory';

export default defineComponent({
  name: 'VTableBodyDefault',
  components: {
    VTableRow,
  },
  data() {
    return {
      rowData: {
        style: StyleFactory.create(['font-semibold', 'font-semibold', 'text-xs', 'text-neutral-800']),
      },
      datas: [
        { username: 'Ramon', isSelected: false, lastLogin: '04/02/2012', isActive: true },
        { username: 'Isadora', isSelected: false, lastLogin: '04/02/2012', isActive: false },
        { username: 'Caio', isSelected: false, lastLogin: '04/02/2012', isActive: true },
      ],
    };
  },
});
</script>
