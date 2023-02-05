import type { IFaFont } from '@/common/components/interfaces/IFaFont';
import type { IStyle } from '@/common/components/interfaces/IStyle';

export interface VFormInput {
  style: IStyle;
  label: {
    text: string;
    style: IStyle;
  };
  boxPicture: {
    style: IStyle;
    picture: IFaFont;
  };
}
