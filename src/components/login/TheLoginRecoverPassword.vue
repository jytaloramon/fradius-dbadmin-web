<template>
  <login-box :login-box-prop="box">
    <template v-slot:header>
      <div class="text-center">
        <h2 class="text-base font-bold">
          {{ $t('label.forgotYourPassword') }}?
        </h2>

        <h3 class="mt-4 text-base text-justify">
          {{ $t('message.passwordRecoverInstrution') }}
        </h3>
      </div>
    </template>

    <template v-slot:main>
      <form>
        <v-form-field-left-icon-input-text
          :input-field-prop="form.username"
          @input-update="setUsername"
        />

        <div class="mt-6 flex justify-between">
          <span class="my-auto">
            <router-link
              class="text-xs font-bold text-green-600 hover:text-green-700"
              to="/signin"
            >
              {{ $t('message.backToLogin') }}
            </router-link>
          </span>
          <span class="w-1/2">
            <v-form-button :button-left-icon-prop="form.sendButton" />
          </span>
        </div>
      </form>
    </template>
  </login-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LoginBox from './LoginBox.vue';
import VFormFieldLeftIconInputText from '@/common/components/form/input/VFormFieldLeftIconInputText.vue';
import VFormButton from '@/common/components/form/buttons/VFormButtonLeftIcon.vue';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'TheLoginRecoverPassword',
  components: {
    LoginBox,
    VFormFieldLeftIconInputText,
    VFormButton,
  },
  data() {
    return {
      box: {
        divider: {
          style: StyleFactory.create(['before:w-[160px]', 'after:w-[160px]']),
          text: '.',
        },
      },
      form: {
        username: {
          style: StyleFactory.create(['mt-8', 'border-gray-600']),
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
        sendButton: {
          type: 'button',
          style: StyleFactory.create(['text-white', 'bg-green-600']),
          text: this.$t('label.send'),
          actionClick: () => {},
          boxIcon: {
            style: StyleFactory.create([]),
            picture: {
              icon: 'fa-solid fa-paper-plane',
              size: 'sm',
              color: 'white',
            },
          },
        },
      },
    };
  },
  methods: {
    setUsername(newUsername: string): void {
      this.form.username.value = newUsername;
    },
  },
});
</script>
