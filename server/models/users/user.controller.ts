const express = require('express');
import { checkSchema } from 'express-validator';
import {
    createUserSchema,
    loginSchema,
    updateUserSchema,
}from './user.validation';

const router = express.Router();
import {authenticate, registration, getAllUsers} from './user.service';

import checkSchemaErrors from '../../error/schema-errors';
import { authorize } from '../../middlewares/authorize';
import authMiddleware from '../../middlewares/auth.middleware';
import headerToTokenMiddleware from '../../middlewares/headerToToken.middleware';

/**
 * Login a new user
 * @param req
 * @param res
 * @param next
 * @returns {data}
 */
 function login (req, res, next) {
    authenticate({
      email: req.body.email,
      password: req.body.password,
      origin: req.body.origin,
    })
    .then(result => res.json(result))
    .catch(err => next(err));
}
 function signup (req, res, next) {
    registration({
        email: req.body.email,
        nom: req.body.nom,
        prenom: req.body.prenom,
        password: req.body.password,
        origin: req.body.origin,
        phone: req.body.phone,
        CIN: req.body.CIN,
    })
    .then(result => res.json(result))
    .catch(err => next(err));
 }
 function all(req,res,next) {
   getAllUsers()
   .then(result => res.json(result))
   .catch(err => next(err));
 }
/**
 *  a new user
 * @param req
 * @param res
 * @param next
 * @returns {data}
 */
/**
 * POST /api/v1/auth/login
 * Login user with email and password
 */
router.post('/login', checkSchema(loginSchema), checkSchemaErrors, login);

 
/**
 * POST /api/v1/auth/signup
 * Register a new user
 */
router.post('/signup', checkSchema(createUserSchema), checkSchemaErrors, signup);

/**
 * PUT /api/v1/user/
 * Update a new user
 */
 router.put('/', checkSchema(updateUserSchema), checkSchemaErrors, signup);

 /**
 * GET /api/v1/user/
 * Get list  all users
 */
  router.get('/',
  headerToTokenMiddleware,
  authMiddleware,
  authorize(['DRD']),
  all);


export default router;