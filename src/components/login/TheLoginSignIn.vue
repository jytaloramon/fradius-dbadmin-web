<template>
  <login-box :login-box-prop="box">
    <template v-slot:header>
      <div class="text-center">
        <h2 class="text-base font-bold">{{ $t('message.loginTitle') }}</h2>
        <h3 class="mt-2 text-base">{{ $t('message.welcome') }}</h3>
      </div>
    </template>

    <template v-slot:main>
      <form>
        <v-form-field-left-icon-input-text
          :input-field-prop="form.username"
          @input-update="setUsername"
        />

        <v-form-field-left-icon-input-text
          :input-field-prop="form.password"
          @input-update="setPassword"
        />

        <div class="mt-2.5 ml-1 text-xs text-gray-600">
          <router-link to="signin/recover">
            {{ $t('label.forgotYourPassword') }}
          </router-link>
        </div>

        <div class="mt-6 text-center">
          <v-form-button :button-left-icon-prop="form.submitButton" />
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
  name: 'TheLoginSignIn',
  components: {
    LoginBox,
    VFormFieldLeftIconInputText,
    VFormButton,
  },
  data() {
    return {
      box: {
        divider: {
          style: StyleFactory.create(['before:w-[130px]', 'after:w-[130px]']),
          text: this.$t('label.logIn'),
        },
      },
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
        submitButton: {
          type: 'button',
          style: StyleFactory.create(['text-white', 'bg-green-600']),
          text: this.$t('label.signIn'),
          actionClick: () => {},
          boxIcon: {
            picture: {
              icon: 'fa-solid fa-right-to-bracket',
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
    setPassword(newPassword: string): void {
      this.form.password.value = newPassword;
    },
  },
});
</script>
