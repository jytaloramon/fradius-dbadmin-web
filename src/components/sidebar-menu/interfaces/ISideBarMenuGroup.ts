import type { IStyle } from '@/common/components/interfaces/IStyle';
import type { ISideBarMenuItemAtomic } from './ISideBarMenuItemAtomic';

export interface ISideBarMenuGroup {
  style?: IStyle;
  title: {
    style?: IStyle;
    text: string;
  };
  list: {
    style?: IStyle;
    items: ISideBarMenuItemAtomic[];
  };
}
