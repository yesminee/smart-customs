class AppError extends Error {
  target: String;
  source:any;
  code:any;
  status:any;
  constructor( code, message, target) {
  // Calling parent constructor of base Error class.
    super(message);

    this.target = target || 'common';


    const constructorName = this.constructor.name;

    this.code = code || constructorName.toLowerCase();

    Error.captureStackTrace(this, this.constructor);
  }

  toJson() {
    return {
      code: this.code,
      target: this.target,
      message: this.message,
    };
  }
}

export default AppError;
