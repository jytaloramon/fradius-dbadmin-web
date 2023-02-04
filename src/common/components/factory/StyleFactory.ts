import type { IStyle } from '../interfaces/IStyle';
import PropetyValidationBaseError from '@/common/errors/PropetyValidationBaseError';

export default class StyleFactory {
  public static create(properties: string[]): IStyle {
    const style: IStyle = {};

    for (const prop of properties) StyleFactory.setPropety(style, prop);

    return style;
  }

  public static setPropety(
    style: IStyle,
    propety: string,
    value: boolean = true): void {
    if (!propety) {
      throw new PropetyValidationBaseError('propety', [
        'propety name has not is empty',
      ]);
    }

    style[propety] = value;
  }
}
