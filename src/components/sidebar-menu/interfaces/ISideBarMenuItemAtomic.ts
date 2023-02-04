import type { IFaFont } from '@/common/components/interfaces/IFaFont';
import type { IStyle } from '@/common/components/interfaces/IStyle';

export interface ISideBarMenuItemAtomic {
  style: IStyle;
  box: {
    style: IStyle;
    spanPicture: {
      style: IStyle;
      picture: IFaFont;
    };
    spanText: {
      style: IStyle;
      text: string;
    };
  };
}
