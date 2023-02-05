<template>
  <VFormInput :input-prop="inputData">
    <input
      type="text"
      class="w-72 focus:outline-none placeholder:italic"
      placeholder="example@xyz.com"
    />
  </VFormInput>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VFormInput from './VFormInput.vue';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'VFormInputTextLeftIcon',
  components: {
    VFormInput,
  },
  data() {
    return {
      inputData: {
        style: StyleFactory.create([
          'mt-8',
          'p-3',
          'border-solid',
          'border-[1px]',
          'border-gray-600',
          'rounded-lg',
        ]),
        label: {
          text: 'Email',
          style: StyleFactory.create([
            'absolute',
            'ml-0',
            '-m-7',
            'py-1',
            'px-2',
            'bg-white',
            'text-xs',
            'font-semibold',
          ]),
        },
        boxPicture: {
          style: StyleFactory.create([
            'ml-3',
            'after:absolute',
            'after:-mt-1',
            'after:mx-3',
            'after:content-["|"]',
            'after:text-lg',
          ]),
          picture: {
            icon: 'fa-solid fa-envelope',
            color: 'black',
            size: 'sm',
          },
        },
      },
    };
  },
});
</script>
