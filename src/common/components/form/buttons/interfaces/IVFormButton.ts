import type { IStyle } from '@/common/components/interfaces/IStyle';

export interface IVFormButton {
  type: string;
  style?: IStyle;
  isDisable?: boolean;
  text: string;
  actionClick: () => void;
}
