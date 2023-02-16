import type { IVTableHeaderItem } from './IVTableHeaderItem';
import type { IStyle } from '@/common/components/interfaces/IStyle';
import type { IFaFont } from '@/common/components/interfaces/IFaFont';

export interface IVTableHeaderItemRightIcon extends IVTableHeaderItem {
  boxIcon: {
    style?: IStyle;
    pictureUp: IFaFont;
    pictureDown: IFaFont;
  };
}
