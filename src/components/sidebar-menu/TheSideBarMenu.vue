<template>
  <aside
    class="w-[240px] h-screen py-4 px-1 flex flex-col justify-between bg-neutral-900 text-neutral-300"
  >
    <div>
      <side-bar-menu-header />

      <side-bar-menu-group :menu-group-prop="menu" />
    </div>

    <side-bar-menu-footer />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBarMenuHeader from './SideBarMenuHeader.vue';
import SideBarMenuGroup from './SideBarMenuGroup.vue';
import SideBarMenuFooter from './SideBarMenuFooter.vue';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'TheSideBarMenu',
  components: { SideBarMenuHeader, SideBarMenuGroup, SideBarMenuFooter },
  data() {
    return {
      menu: {
        title: { text: 'Menu' },
        list: {
          items: [
            {
              style: StyleFactory.create(['my-1']),
              box: {
                style: StyleFactory.create([
                  'flex',
                  'flex-row',
                  'p-2',
                  'rounded-lg',
                  'hover:bg-neutral-700',
                ]),
                spanPicture: {
                  style: StyleFactory.create(['ml-1']),
                  picture: {
                    icon: 'fa-solid fa-chart-simple',
                    color: 'white',
                  },
                },
                spanText: {
                  style: StyleFactory.create(['ml-3', 'my-auto', 'text-sm']),
                  text: this.$t('label.dashboard'),
                },
              },
            },
            {
              style: StyleFactory.create(['my-1']),
              box: {
                style: StyleFactory.create([
                  'flex',
                  'flex-row',
                  'p-2',
                  'rounded-lg',
                  'hover:bg-neutral-700',
                ]),
                spanPicture: {
                  style: StyleFactory.create(['ml-1']),
                  picture: {
                    icon: 'fa-solid fa-users',
                    color: 'white',
                  },
                },
                spanText: {
                  style: StyleFactory.create(['ml-3', 'my-auto', 'text-sm']),
                  text: this.$t('label.user'),
                },
              },
            },
            {
              style: StyleFactory.create(['my-1']),
              box: {
                style: StyleFactory.create([
                  'flex',
                  'flex-row',
                  'p-2',
                  'rounded-lg',
                  'hover:bg-neutral-700',
                ]),
                spanPicture: {
                  style: StyleFactory.create(['ml-1']),
                  picture: {
                    icon: 'fa-solid fa-ethernet',
                    color: 'white',
                  },
                },
                spanText: {
                  style: StyleFactory.create(['ml-3', 'my-auto', 'text-sm']),
                  text: this.$t('label.nas'),
                },
              },
            },
          ],
        },
      },
    };
  },
});
</script>
