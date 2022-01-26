import  AppError from './AppError';

class AuthorizationError extends AppError {
  constructor(message) {
    super(401, 'AUTHENTICATE_TOKEN_INVALID', message || 'Failed to authenticate token!');
  }
}

export default AuthorizationError;
