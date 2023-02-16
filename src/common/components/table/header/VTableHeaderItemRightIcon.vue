<template>
  <v-table-header-item :header-item-prop="headerItemProp">
    <template v-slot:right>
      <span :class="headerItemProp.boxIcon.style">
        <button type="button">
          <font-awesome-icon
            :icon="headerItemProp.boxIcon.pictureUp.icon"
            :size="headerItemProp.boxIcon.pictureUp.size"
            :color="headerItemProp.boxIcon.pictureUp.color"
            :rotation="headerItemProp.boxIcon.pictureUp.rotation"
          />
        </button>

        <button type="button">
          <font-awesome-icon
            :icon="headerItemProp.boxIcon.pictureDown.icon"
            :size="headerItemProp.boxIcon.pictureDown.size"
            :color="headerItemProp.boxIcon.pictureDown.color"
            :rotation="headerItemProp.boxIcon.pictureDown.rotation"
          />
        </button>
      </span>
    </template>
  </v-table-header-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import VTableHeaderItem from './VTableHeaderItem.vue';
import type { IVTableHeaderItemRightIcon } from './interfaces/IVTableHeaderItemRightIcon';

export default defineComponent({
  name: 'VTableHeaderItemRightIcon',
  props: {
    headerItemProp: {
      type: Object as PropType<IVTableHeaderItemRightIcon>,
      required: true,
    },
  },
  components: {
    VTableHeaderItem,
  },
});
</script>
