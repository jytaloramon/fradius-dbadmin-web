<template>
  <div :class="getBoxStyle">
    <h2 :class="getTitleStyle">
      {{ menuGroupProp.title.text }}: {{ getSizeMenu }}
    </h2>

    <ul :class="getListStyle">
      <side-bar-menu-item-atomic
        v-for="(item, idx) in menuGroupProp.list.items"
        :key="idx"
        @item-click="updateItemSelected(item)"
        :item-prop="item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { ISideBarMenuGroup } from './interfaces/ISideBarMenuGroup';
import type { ISideBarMenuItemAtomic } from './interfaces/ISideBarMenuItemAtomic';
import SideBarMenuItemAtomic from './SideBarMenuItemAtomic.vue';
import type { IStyle } from '@/common/components/interfaces/IStyle';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'SideBarMenuGroup',
  props: {
    menuGroupProp: {
      type: Object as PropType<ISideBarMenuGroup>,
      required: true,
    },
  },
  setup() {},
  components: { SideBarMenuItemAtomic },
  data() {
    return {
      boxStyle: StyleFactory.create(['py-3']),
      titleStye: StyleFactory.create(['mx-5', 'text-xs']),
      listStyle: StyleFactory.create(['mx-2', 'mt-4']),
      menuItemSelected: {} as ISideBarMenuItemAtomic,
    };
  },
  beforeMount() {
    if (this.menuGroupProp.list.items.length <= 0) return;

    this.updateItemSelected(this.menuGroupProp.list.items[0]);
  },
  computed: {
    getSizeMenu(): number {
      return this.menuGroupProp.list.items.length;
    },
    getBoxStyle(): IStyle {
      return {
        ...this.boxStyle,
        ...this.menuGroupProp.style,
      };
    },
    getTitleStyle(): IStyle {
      return {
        ...this.titleStye,
        ...this.menuGroupProp.title.style,
      };
    },
    getListStyle(): IStyle {
      return {
        ...this.listStyle,
        ...this.menuGroupProp.list.style,
      };
    },
  },
  methods: {
    updateItemSelected(newItem: ISideBarMenuItemAtomic): void {
      if (this.menuItemSelected.box) {
        if (this.menuItemSelected == newItem) return;

        StyleFactory.setPropety(
          this.menuItemSelected.box.style,
          'hover:bg-neutral-700'
        );
        StyleFactory.setPropety(
          this.menuItemSelected.box.style,
          'bg-neutral-800',
          false
        );
        this.menuItemSelected.box.spanPicture.picture.color = 'white';
      }

      StyleFactory.setPropety(newItem.box.style, 'hover:bg-neutral-700', false);
      StyleFactory.setPropety(newItem.box.style, 'bg-neutral-800');
      newItem.box.spanPicture.picture.color = 'rgb(22, 163, 74)';

      this.menuItemSelected = newItem;
    },
  },
});
</script>
