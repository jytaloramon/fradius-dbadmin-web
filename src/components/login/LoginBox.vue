<template>
  <div class="w-[420px] m-auto p-6 bg-white text-gray-700 rounded-md shadow-md">
    <slot name="header"></slot>

    <div :class="getDividerStyle">
      {{ loginBoxProp.divider.text }}
    </div>

    <slot name="main"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { ILoginBox } from './interfaces/ILoginBox';
import type { IStyle } from '@/common/components/interfaces/IStyle';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'LoginBox',
  props: {
    loginBoxProp: {
      type: Object as PropType<ILoginBox>,
      required: true,
    },
  },
  data() {
    return {
      dividerStyle: StyleFactory.create([
        'mt-3',
        'py-2',
        'text-center',
        'text-sm',
        'before:float-left',
        'before:mt-3',
        'before:border-dashed',
        'before:border-[1px]',
        'after:float-right',
        'after:mt-3',
        'after:border-dashed',
        'after:border-[1px]',
      ]),
    };
  },
  computed: {
    getDividerStyle(): IStyle {
      return {
        ...this.dividerStyle,
        ...this.loginBoxProp.divider.style,
      };
    },
  },
});
</script>
