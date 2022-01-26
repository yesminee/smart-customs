import  AppError from './AppError';

class LimitAccessError extends AppError {
  constructor(message) {
    const target = 'limit';
    const code = 'LIMIT_ACCESS';

    super(code, message, target);
  }
}

export default LimitAccessError;
