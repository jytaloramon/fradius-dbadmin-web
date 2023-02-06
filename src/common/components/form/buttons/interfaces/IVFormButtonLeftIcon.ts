import type { IStyle } from '@/common/components/interfaces/IStyle';
import type { IVFormButton } from './IVFormButton';
import type { IFaFont } from '@/common/components/interfaces/IFaFont';

export interface IVFormButtonLeftIcon extends IVFormButton {
  boxIcon: {
    style?: IStyle;
    picture: IFaFont;
  }
}
