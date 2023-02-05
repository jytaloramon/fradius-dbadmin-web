import type { IVFormFieldLeftIcon } from './IVFormFieldLeftIcon';

export interface IVFormFieldLeftIconInputText extends IVFormFieldLeftIcon {
  // 'text' | 'email' | 'password' | 'date' | 'datetime-local' | 'number'
  type: string;
  placeholder: string;
  value: string;
}
