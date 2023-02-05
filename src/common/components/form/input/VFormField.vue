<template>
  <div>
    <div :class="getFieldStyle">
      <label :class="getLabelStyle">{{ fieldProp.label.text }}</label>

      <slot></slot>
    </div>

    <div :class="getShortMessageStyle" v-if="fieldProp.shortMessage.text">
      <p>{{ fieldProp.shortMessage.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { IStyle } from '../../interfaces/IStyle';
import type { IVFormField } from './interfaces/IVFormField';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'VFormField',
  props: {
    fieldProp: {
      type: Object as PropType<IVFormField>,
      required: true,
    },
  },
  setup() {},
  data() {
    return {
      field: {
        style: StyleFactory.create([
          'p-3',
          'border-solid',
          'border-[1px]',
          'rounded-lg',
        ]),
        label: {
          style: StyleFactory.create([
            'absolute',
            'ml-0',
            '-m-7',
            'py-1',
            'px-2',
            'text-xs',
            'font-semibold',
          ]),
        },
        shortMessage: {
          style: StyleFactory.create(['mt-2', 'ml-5', 'text-xs']),
        },
      },
    };
  },
  computed: {
    getFieldStyle(): IStyle {
      return { ...this.field.style, ...this.fieldProp.style };
    },
    getLabelStyle(): IStyle {
      return { ...this.field.label.style, ...this.fieldProp.label.style };
    },
    getShortMessageStyle(): IStyle {
      return {
        ...this.field.shortMessage.style,
        ...this.fieldProp.shortMessage.style,
      };
    },
  },
});
</script>
