<template>
  <login-modal>
    <div class="text-center">
      <h2 class="text-base font-bold">Faça login na sua conta</h2>
      <h3 class="mt-1 text-base">Bem Vindo</h3>
    </div>

    <div
      class="m-1 py-2 text-center before:float-left before:w-[140px] before:mt-3 before:border-dashed before:border-[1px] after:float-right after:w-[140px] after:mt-3 after:border-dashed after:border-[1px]"
    >
      Sing In
    </div>

    <form>
      <v-form-field-left-icon-input-text
        :input-field-prop="form.username"
        @input-update="setUsername"
      />

      <v-form-field-left-icon-input-text
        :input-field-prop="form.password"
        @input-update="setPassword"
      />
    </form>
  </login-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LoginModal from './LoginModal.vue';
import VFormFieldLeftIconInputText from '@/common/components/form/input/VFormFieldLeftIconInputText.vue';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'TheSignIn',
  components: {
    LoginModal,
    VFormFieldLeftIconInputText,
  },
  data() {
    return {
      k: '',
      form: {
        username: {
          style: StyleFactory.create(['mt-9', 'border-gray-600']),
          type: 'text',
          placeholder: this.$t('example.username'),
          value: '',
          label: {
            style: StyleFactory.create(['bg-white']),
            text: this.$t('label.username'),
          },
          shortMessage: {
            text: '',
          },
          picture: {
            icon: 'fa-solid fa-user',
            size: 'xs',
            color: 'black',
          },
        },
        password: {
          style: StyleFactory.create(['mt-9', 'border-gray-600']),
          type: 'password',
          placeholder: this.$t('example.password'),
          value: '',
          label: {
            style: StyleFactory.create(['bg-white']),
            text: this.$t('label.password'),
          },
          shortMessage: {
            text: '',
          },
          picture: {
            icon: 'fa-solid fa-lock',
            size: 'xs',
            color: 'black',
          },
        },
      },
    };
  },
  methods: {
    setUsername(newUsername: string): void {
      this.form.username.value = newUsername;
    },
    setPassword(newPassword: string): void {
      this.form.password.value = newPassword;
    },
  },
});
</script>
