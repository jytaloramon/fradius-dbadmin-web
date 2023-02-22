import type { IStyle } from '@/common/components/interfaces/IStyle';

export interface IVTableHeaderItem {
  style?: IStyle;
  boxText: {
    style?: IStyle;
    text: string;
  };
}
