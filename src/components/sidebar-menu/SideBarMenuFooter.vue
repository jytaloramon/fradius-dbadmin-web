<template>
  <div class="pt-2">
    <div class="mb-1 mx-2">
      <ul class="">
        <side-bar-menu-item-atomic
          @item-click="signOut"
          :item-prop="menuItem.signOut"
        />

        <side-bar-menu-item-atomic
          @item-click="changeTheme"
          :item-prop="menuItem.themeMode"
        >
          <span
            class="my-auto ml-auto w-8 h-4 py-0.5 px-1 bg-white rounded-2xl"
          >
            <div class="w-3 h-3 rounded-full bg-black float-right"></div>
          </span>
        </side-bar-menu-item-atomic>
      </ul>
    </div>

    <div class="mx-2 px-3 py-4 flex flex-row rounded-lg bg-neutral-800">
      <span>
        <img
          class="w-[36px] h-[36px] rounded-full border-4"
          src="https://4maos.com.br/wp-content/uploads/2022/10/e4031b6fdcd96b53c78b2e3a12f6819c.jpg"
          alt="Profile Picture"
        />
      </span>

      <span class="ml-3 text-slate-100">
        <h3 class="text-xs">{{ $t('message.menuGreeting') }},</h3>
        <h2 class="text-sm font-bold">Ytalo Ramon</h2>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBarMenuItemAtomic from './SideBarMenuItemAtomic.vue';

import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'SideBarMenuFooter',
  components: { SideBarMenuItemAtomic },
  data() {
    return {
      menuItem: {
        signOut: {
          style: StyleFactory.create(['my-1']),
          box: {
            style: StyleFactory.create([
              'flex',
              'flex-row',
              'p-2',
              'rounded-lg',
              'hover:bg-neutral-700',
              'bg-neutral-800',
            ]),
            spanPicture: {
              style: StyleFactory.create(['ml-1']),
              picture: {
                icon: 'fa-solid fa-right-to-bracket',
                color: 'white',
                rotation: '180',
              },
            },
            spanText: {
              style: StyleFactory.create(['ml-3', 'my-auto', 'text-sm']),
              text: this.$t('label.signOut'),
            },
          },
        },
        themeMode: {
          style: StyleFactory.create(['my-1']),
          box: {
            style: StyleFactory.create([
              'flex',
              'flex-row',
              'p-2',
              'rounded-lg',
              'hover:bg-neutral-700',
              'bg-neutral-800',
            ]),
            spanPicture: {
              style: StyleFactory.create(['ml-1']),
              picture: {
                icon: 'fa-solid fa-sun',
                color: 'white',
              },
            },
            spanText: {
              style: StyleFactory.create(['ml-3', 'my-auto', 'text-sm']),
              text: this.$t('label.lightMode'),
            },
          },
        },
      },
    };
  },
  methods: {
    signOut(): void {
      return;
    },
    changeTheme(): void {
      return;
    },
  },
});
</script>
