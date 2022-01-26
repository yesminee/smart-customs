import { checkSchema } from "express-validator";

import { authenticate, registration, getAllUsers } from "./user.service";

import { authorize } from "../../middlewares/authorize";
import authMiddleware from "../../middlewares/auth.middleware";
import headerToTokenMiddleware from "../../middlewares/headerToToken.middleware";
import express from "express";
import {
  createUserSchema,
  loginSchema,
  updateUserSchema,
} from "./user.validation";

const router = express.Router();

import checkSchemaErrors from "../../error/schema-errors";

/**
 * Login a new user
 * @param req
 * @param res
 * @param next
 * @returns {data}
 */
function login(req, res, next) {
  authenticate({
    email: req.body.email,
    motDePasse: req.body.motDePasse,
  })
    .then((result) => res.json(result))
    .catch((err) => next(err));
}
function signup(req, res, next) {
  registration({
    email: req.body.email,
    nom: req.body.nom,
    prenom: req.body.prenom,
    motDePasse: req.body.motDePasse,
    numeroTel: req.body.numeroTel,
    cin: req.body.cin,
  })
    .then((result) => res.json(result))
    .catch((err) => next(err));
}
function all(req, res, next) {
  getAllUsers()
    .then((result) => res.json(result))
    .catch((err) => next(err));
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
router.post("/login", checkSchema(loginSchema), checkSchemaErrors, login);

/**
 * POST /api/v1/auth/signup
 * Register a new user
 */
router.post(
  "/signup",
  checkSchema(createUserSchema),
  checkSchemaErrors,
  signup
);

/**
 * PUT /api/v1/user/
 * Update a new user
 */

/**
 * GET /api/v1/user/
 * Get list  all users
 */
router.get(
  "/",
  headerToTokenMiddleware,
  authMiddleware,
  authorize(["DRD"]),
  all
);

router.put("/", checkSchema(updateUserSchema), checkSchemaErrors, signup);

export default router;
