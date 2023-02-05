<template>
  <v-form-field :field-prop="fieldLeftIconProp">
    <div class="flex">
      <span
        class="ml-3 w-12 after:absolute after:-mt-1 after:mx-3 after:content-['|'] after:text-lg"
      >
        <font-awesome-icon
          :icon="fieldLeftIconProp.picture.icon"
          :size="fieldLeftIconProp.picture.size"
          :color="fieldLeftIconProp.picture.color"
          :rotation="fieldLeftIconProp.picture.rotation"
        />
      </span>

      <span class="w-full"><slot></slot></span>
    </div>
  </v-form-field>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { IVFormFieldLeftIcon } from './interfaces/IVFormFieldLeftIcon';
import VFormField from './VFormField.vue';

export default defineComponent({
  name: 'VFormFieldLeftIcon',
  props: {
    fieldLeftIconProp: {
      type: Object as PropType<IVFormFieldLeftIcon>,
      required: true,
    },
  },
  setup() {},
  components: {
    VFormField,
  },
});
</script>
