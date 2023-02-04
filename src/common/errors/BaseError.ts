export default abstract class AppError extends Error {
  public constructor(name: string, message?: string) {
    super(message);
    this.name = name;
  }

  public abstract getObject(): Object;
}
