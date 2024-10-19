export class AppError extends Error {
  constructor(
    message: string,
    public response: Response,
  ) {
    super(message);
  }
}
