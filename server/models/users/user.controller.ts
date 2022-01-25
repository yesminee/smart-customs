const express = require('express');
const { checkSchema } = require('express-validator');
const {
    createUserSchema,
    loginSchema
}= require('./user.validation');

const router = express.Router();
import {authenticate, registration} from './user.service';

import checkSchemaErrors from '../../error/schema-errors';

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

export default router;