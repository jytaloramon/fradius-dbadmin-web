<template>
  <div :class="inputProp.style">
    <label :class="inputProp.label.style">{{ inputProp.label.text }}</label>
    <div>
      <span :class="inputProp.boxPicture.style">
        <font-awesome-icon
          :icon="inputProp.boxPicture.picture.icon"
          :size="inputProp.boxPicture.picture.size"
          :color="inputProp.boxPicture.picture.color"
          :rotation="inputProp.boxPicture.picture.rotation"
        />
      </span>

      <span class="float-right">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { VFormInput } from './interfaces/VFormInput';

export default defineComponent({
  name: 'VFormInput',
  props: {
    inputProp: {
      type: Object as PropType<VFormInput>,
      required: true,
    },
  },
  setup() {},
});
</script>
