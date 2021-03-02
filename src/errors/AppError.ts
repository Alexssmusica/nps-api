
export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor (mensage: string, statusCode = 400) {
  	this.message = mensage;
      this.statusCode = statusCode;
  }
}
