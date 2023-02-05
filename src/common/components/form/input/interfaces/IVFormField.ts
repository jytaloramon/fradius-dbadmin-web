import type { IStyle } from '@/common/components/interfaces/IStyle';

export interface IVFormField {
  style?: IStyle;
  label: {
    text: string;
    style?: IStyle;
  };
  shortMessage: {
    text: string;
    style?: IStyle;
  };
}
