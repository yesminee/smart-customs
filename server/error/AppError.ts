class AppError extends Error {
  code: string;
  status: number;
  source: any;
  constructor( status, code, message) {
  // Calling parent constructor of base Error class.
    super(message);

    const constructorName = this.constructor.name;
    this.status = status || 500;
    this.code = code || constructorName.toLowerCase();

    Error.captureStackTrace(this, this.constructor);
  }
  toJson() {
    return {
      code: this.code,
      message: this.message,
      source: this.source,
    };
  }
}

export default AppError;
