<template>
  <v-form-field-left-icon :fieldLeftIconProp="inputFieldProp">
    <input
      :type="inputFieldProp.type"
      class="w-full focus:outline-none placeholder:italic"
      :placeholder="inputFieldProp.placeholder"
      :value="inputFieldProp.value"
      @input="$emit('inputUpdate', $event.target?.value ?? '')"
    />
  </v-form-field-left-icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { IVFormFieldLeftIconInputText } from './interfaces/IVFormFieldLeftIconInputText';
import VFormFieldLeftIcon from './VFormFieldLeftIcon.vue';

export default defineComponent({
  name: 'VFormFieldLeftIconInputText',
  props: {
    inputFieldProp: {
      type: Object as PropType<IVFormFieldLeftIconInputText>,
      required: true,
    },
  },
  setup() {},
  components: {
    VFormFieldLeftIcon,
  },
});
</script>
