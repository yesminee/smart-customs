import AuthorizationError from '../error/AuthenticationError';
import LimitAccessError from '../error/LimitAccessError';

import  i18n from '../services/i18n';
import  db from '../helpers/db';
const DEFAULT_ALLOWED_ROLES = ['client'];
const { User } = db;
export const authorize = (
    roles = DEFAULT_ALLOWED_ROLES,
  ) => async (req, res, next) => {
      console.log(req.user)
    if (!req.user) {
        console.log('here')
        throw new AuthorizationError(i18n.__('user.authorisation.invalid_token'));
    }
    roles.push('BFC');
    if (!roles.includes(req.user.role)) {
        throw new LimitAccessError(i18n.__('user.authorization.access_permission'));
    }
    next();
};