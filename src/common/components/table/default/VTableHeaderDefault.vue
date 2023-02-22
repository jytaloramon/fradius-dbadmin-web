<template>
  <thead>
    <v-table-row :row-prop="rowData">
      <v-table-header-item-left-checkbox :header-item-prop="itemSelectAll" @update-value="() => { }" />

      <v-table-header-item-right-icon v-for="(item, idx) in items" :key="idx" :header-item-prop="item"
        @click-sort-button="sortByItem(item)" />

      <th class="p-3 float-right font-semibold">Action</th>
    </v-table-row>
  </thead>
  <span class=""></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StyleFactory from '../../factory/StyleFactory';
import type { IVTableHeaderItemLeftCheckbox } from '../header/interfaces/IVTableHeaderItemLeftCheckbox';
import type { IVTableHeaderItemRightIcon } from '../header/interfaces/IVTableHeaderItemRightIcon';

import VTableRow from '../main/VTableRow.vue';
import VTableHeaderItemLeftCheckbox from '../header/VTableHeaderItemLeftCheckbox.vue';
import VTableHeaderItemRightIcon from '../header/VTableHeaderItemRightIcon.vue';

export default defineComponent({
  name: 'VTableHeaderDefault',
  components: {
    VTableRow,
    VTableHeaderItemLeftCheckbox,
    VTableHeaderItemRightIcon,
  },
  data() {
    return {
      rowData: {
        style: StyleFactory.create(['border-y', 'text-xs', 'text-neutral-600']),
      },
      itemSelectAll: {} as IVTableHeaderItemLeftCheckbox,
      items: [] as IVTableHeaderItemRightIcon[],
      itemSelected: {} as IVTableHeaderItemRightIcon,
    };
  },
  beforeMount() {
    this.itemSelectAll = this.createItemLeftCheckbox('Todos');
    this.items = this.createSetItems(['Username', 'Last Login', 'Is Active']);
    this.sortByItem(this.items[0]);
  },
  methods: {
    createItemLeftCheckbox(title: string): IVTableHeaderItemLeftCheckbox {
      return {
        style: StyleFactory.create(['py-4', 'px-3', 'font-semibold']),
        isChecked: false,
        boxCheckbox: {
          style: StyleFactory.create([]),
        },
        boxText: {
          style: StyleFactory.create(['ml-2']),
          text: title,
        },
      };
    },
    createItemRightIcon(title: string): IVTableHeaderItemRightIcon {
      return {
        style: StyleFactory.create(['py-4', 'px-3', 'font-semibold']),
        boxText: {
          style: StyleFactory.create([
            'underline-offset-8',
            'decoration-neutral-500',
          ]),
          text: title,
        },
        boxIcon: {
          style: StyleFactory.create(['ml-2']),
          pictureUp: {
            icon: 'fa-solid fa-caret-up',
            size: 'xs',
            color: 'grey',
            rotation: '180',
          },
        },
      };
    },
    createSetItems(titles: string[]): IVTableHeaderItemRightIcon[] {
      const items: IVTableHeaderItemRightIcon[] = [];

      for (const title of titles) items.push(this.createItemRightIcon(title));

      return items;
    },
    selectSortByItem(item: IVTableHeaderItemRightIcon): void {
      item.boxIcon.pictureUp.color = 'black';
      item.boxIcon.pictureUp.rotation = '180';

      if (item.boxText.style) item.boxText.style['underline'] = true;
    },
    unselectSortByItem(item: IVTableHeaderItemRightIcon): void {
      item.boxIcon.pictureUp.color = 'grey';
      item.boxIcon.pictureUp.rotation = '180';

      if (item.boxText.style) item.boxText.style['underline'] = false;
    },
    sortByItem(item: IVTableHeaderItemRightIcon): void {
      if (this.itemSelected == item) {
        item.boxIcon.pictureUp.rotation = item.boxIcon.pictureUp.rotation
          ? undefined
          : '180';

        return;
      }

      if (this.itemSelected.boxIcon) this.unselectSortByItem(this.itemSelected);

      this.selectSortByItem(item);
      this.itemSelected = item;
    },
  },
});
</script>
