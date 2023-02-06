<template>
  <button
    :class="getButtonStyle"
    :type="buttonProp.type"
    :disabled="buttonProp.isDisable"
    @click="buttonProp.actionClick"
  >
    <slot name="left"></slot>

    {{ buttonProp.text }}

    <slot name="right"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { IStyle } from '../../interfaces/IStyle';
import type { IVFormButton } from './interfaces/IVFormButton';
import StyleFactory from '../../factory/StyleFactory';

export default defineComponent({
  name: 'VFormButton',
  props: {
    buttonProp: {
      type: Object as PropType<IVFormButton>,
      required: true,
    },
  },
  setup() {},
  data() {
    return {
      style: StyleFactory.create(['w-full', 'p-3', 'text-base', 'rounded-lg']),
    };
  },
  computed: {
    getButtonStyle(): IStyle {
      return { ...this.style, ...this.buttonProp.style };
    },
  },
});
</script>
