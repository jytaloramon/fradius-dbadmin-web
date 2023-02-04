import BaseError from './BaseError';

export default class PropetyValidationBaseError extends BaseError {
  private readonly propety: string;

  private readonly errors: string[];

  public constructor(propety: string, errors: string[]) {
    super('PropetyValidationError');

    this.propety = propety;
    this.errors = errors;
  }

  public getObject(): Object {
    return {
      propety: this.propety,
      errors: this.errors,
    };
  }
}
