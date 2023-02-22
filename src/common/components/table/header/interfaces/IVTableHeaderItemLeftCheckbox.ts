import type { IStyle } from '@/common/components/interfaces/IStyle';
import type { IVTableHeaderItem } from './IVTableHeaderItem';

export interface IVTableHeaderItemLeftCheckbox extends IVTableHeaderItem {
  isChecked: boolean;
  boxCheckbox: {
    style?: IStyle;
  };
}
