import { describe, test, expect } from 'vitest';

import PropetyValidationBaseError from '../../../../src/common/errors/PropetyValidationBaseError';
import StyleFactory from '../../../../src/common/components/factory/StyleFactory';

describe('Set property', () => {
  test('Add a new property with value true', () => {
    const style = {};
    const propety = 'padding';

    StyleFactory.setPropety(style, propety, true);

    expect(style[propety]).toBe(true);
  });

  test('Add a new property with no value', () => {
    const style = {};
    const propety = 'padding';

    StyleFactory.setPropety(style, propety);

    expect(style[propety]).toBe(true);
  });

  test('Add a new property with value false', () => {
    const style = {};
    const propety = 'padding';

    StyleFactory.setPropety(style, propety, false);

    expect(style[propety]).toBe(false);
  });

  test('Add property with empty name', () => {
    const style = {};
    const propety = '';

    expect(() => StyleFactory.setPropety(style, propety)).toThrowError(
      PropetyValidationBaseError
    );
  });

  test('Changing property value', () => {
    const style = { padding: true };
    const propety = 'padding';

    StyleFactory.setPropety(style, propety, false);

    expect(style[propety]).toBe(false);
  });

  test('Adding property alongside others', () => {
    const style = { padding: true };
    const propety = 'top';

    StyleFactory.setPropety(style, propety, false);

    expect(style['padding'] !== undefined && style[propety] !== undefined).toBe(
      true
    );
  });
});
