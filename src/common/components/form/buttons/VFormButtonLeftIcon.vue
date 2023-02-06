<template>
  <v-form-button :button-prop="buttonLeftIconProp">
    <template v-slot:left>
      <span :class="getBoxIconStyle">
        <font-awesome-icon
          :icon="buttonLeftIconProp.boxIcon.picture.icon"
          :size="buttonLeftIconProp.boxIcon.picture.size"
          :color="buttonLeftIconProp.boxIcon.picture.color"
          :rotation="buttonLeftIconProp.boxIcon.picture.rotation"
        />
      </span>
    </template>
  </v-form-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { IVFormButtonLeftIcon } from './interfaces/IVFormButtonLeftIcon';
import VFormButton from './VFormButton.vue';
import StyleFactory from '../../factory/StyleFactory';
import type { IStyle } from '../../interfaces/IStyle';

export default defineComponent({
  name: 'VFormButtoLeftIcon',
  props: {
    buttonLeftIconProp: {
      type: Object as PropType<IVFormButtonLeftIcon>,
      required: true,
    },
  },
  setup() {},
  components: {
    VFormButton,
  },
  data() {
    return {
      boxIcon: {
        style: StyleFactory.create(['px-1']),
      },
    };
  },
  computed: {
    getBoxIconStyle(): IStyle {
      return {
        ...this.boxIcon.style,
        ...this.buttonLeftIconProp.boxIcon.style,
      };
    },
  },
});
</script>
