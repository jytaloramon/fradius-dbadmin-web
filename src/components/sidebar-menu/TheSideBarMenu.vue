<template>
  <aside
    class="w-[240px] py-4 px-1 h-screen bg-black flex flex-col justify-between divide-y divide-dashed"
  >
    <div class="divide-y divide-dotted">
      <div class="flex mx-5 py-4 flex-row">
        <span>
          <img
            class="w-[48px] h-[48px] rounded-full border-4 bo"
            src="https://4maos.com.br/wp-content/uploads/2022/10/e4031b6fdcd96b53c78b2e3a12f6819c.jpg"
            alt="Profile Picture"
          />
        </span>

        <span class="ml-3 mt-1 text-slate-100">
          <h3 class="text-xs">{{ $t('message.menuGreeting') }},</h3>
          <h2 class="text-sm font-bold">Ytalo Ramon</h2>
        </span>

        <span class="mt-2 ml-auto">
          <a>
            <font-awesome-icon icon="fa-angle-double-left" color="white" />
          </a>
        </span>
      </div>

      <div class="py-5 text-blue-50">
        <h2 class="mx-5 text-xs">{{ $t('label.menu') }}: {{ getSizeMenu }}</h2>

        <ul class="mx-3 mt-4">
          <side-bar-menu-item-atomic
            @item-click="updateItemSelected(menuItem.dashboard)"
            :item-prop="menuItem.dashboard"
          />

          <side-bar-menu-item-atomic
            @item-click="updateItemSelected(menuItem.user)"
            :item-prop="menuItem.user"
          />

          <side-bar-menu-item-atomic
            @item-click="updateItemSelected(menuItem.nas)"
            :item-prop="menuItem.nas"
          />
        </ul>
      </div>
    </div>

    <div class="pt-2 text-blue-50">
      <ul class="mx-3 mt-auto">
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
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBarMenuItemAtomic from './SideBarMenuItemAtomic.vue';
import type { ISideBarMenuItemAtomic } from './interfaces/ISideBarMenuItemAtomic';
import StyleFactory from '@/common/components/factory/StyleFactory';

export default defineComponent({
  name: 'TheSideBarMenu',
  components: { SideBarMenuItemAtomic },
  data() {
    return {
      menuItem: {
        dashboard: {
          style: StyleFactory.create(['my-1']),
          box: {
            style: StyleFactory.create([
              'flex',
              'flex-row',
              'p-2',
              'rounded-lg',
              'hover:bg-gray-700',
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
        user: {
          style: StyleFactory.create(['my-1']),
          box: {
            style: StyleFactory.create([
              'flex',
              'flex-row',
              'p-2',
              'rounded-lg',
              'hover:bg-gray-700',
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
        nas: {
          style: StyleFactory.create(['my-1']),
          box: {
            style: StyleFactory.create([
              'flex',
              'flex-row',
              'p-2',
              'rounded-lg',
              'hover:bg-gray-700',
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
        signOut: {
          style: StyleFactory.create(['my-1']),
          box: {
            style: StyleFactory.create([
              'flex',
              'flex-row',
              'p-2',
              'rounded-lg',
              'hover:bg-gray-700',
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
              'hover:bg-gray-700',
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
      menuItemSelected: {} as ISideBarMenuItemAtomic,
    };
  },
  beforeMount() {
    this.updateItemSelected(this.menuItem.dashboard);
  },
  computed: {
    getSizeMenu(): number {
      return 3;
    },
  },
  methods: {
    updateItemSelected(newItem: ISideBarMenuItemAtomic): void {
      if (this.menuItemSelected.box) {
        if (this.menuItemSelected == newItem) return;

        StyleFactory.setPropety(
          this.menuItemSelected.box.style,
          'hover:bg-gray-700'
        );
        StyleFactory.setPropety(
          this.menuItemSelected.box.style,
          'bg-green-600',
          false
        );
      }

      StyleFactory.setPropety(newItem.box.style, 'hover:bg-gray-700', false);
      StyleFactory.setPropety(newItem.box.style, 'bg-green-600');

      this.menuItemSelected = newItem;
    },
    signOut(): void {
      return;
    },
    changeTheme(): void {
      return;
    },
  },
});
</script>
