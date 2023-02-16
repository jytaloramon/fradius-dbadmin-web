<template>
  <v-table-header-item :header-item-prop="headerItemProp">
    <template v-slot:right>
      <span :class="headerItemProp.boxIcon.style">
        <div :class="headerItemProp.boxIcon.boxIconUp.style">
          <button type="button">
            <font-awesome-icon
              :icon="headerItemProp.boxIcon.boxIconUp.picture.icon"
              :size="headerItemProp.boxIcon.boxIconUp.picture.size"
              :color="headerItemProp.boxIcon.boxIconUp.picture.color"
              :rotation="headerItemProp.boxIcon.boxIconUp.picture.rotation"
            />
          </button>
        </div>

        <div :class="headerItemProp.boxIcon.boxIconDown.style">
          <button type="button">
            <font-awesome-icon
              :icon="headerItemProp.boxIcon.boxIconDown.picture.icon"
              :size="headerItemProp.boxIcon.boxIconDown.picture.size"
              :color="headerItemProp.boxIcon.boxIconDown.picture.color"
              :rotation="headerItemProp.boxIcon.boxIconDown.picture.rotation"
            />
          </button>
        </div>
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
