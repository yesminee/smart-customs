import  AppError from './AppError';

class AuthenticationError extends AppError {
  constructor(message) {
    super(401, 'INVALID_CREDENTIALS', message || 'Username or password is incorrect.');
  }
}

export default AuthenticationError;
