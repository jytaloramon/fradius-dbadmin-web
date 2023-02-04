<template>
  <li :class="itemProp.style">
    <a :class="itemProp.box.style" @click="$emit('itemClick')">
      <span :class="itemProp.box.spanPicture.style">
        <font-awesome-icon
          :icon="itemProp.box.spanPicture.picture.icon"
          :color="itemProp.box.spanPicture.picture.color"
          :size="itemProp.box.spanPicture.picture.size"
          :rotation="itemProp.box.spanPicture.picture.rotation"
        />
      </span>

      <span :class="itemProp.box.spanText.style">
        {{ itemProp.box.spanText.text }}
      </span>

      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { ISideBarMenuItemAtomic } from './interfaces/ISideBarMenuItemAtomic';

export default defineComponent({
  name: 'SideBarMenuItemAtomic',
  props: {
    itemProp: {
      type: Object as PropType<ISideBarMenuItemAtomic>,
      required: true,
    },
  },
  setup() {},
});
</script>
