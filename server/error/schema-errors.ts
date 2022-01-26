import { validationResult } from "express-validator";

const errorFormatter = ({ msg, param }) => ({
  code: "is_invalid",
  target: "field",
  message: msg,
  source: { field: param },
});

/**
 * Validation Schema Error handler.
 */

function checkSchemaErrors(req, res, next) {
  console.log(req.body);
  // Check validation Schema Errors
  const schemaValidation = validationResult(req).formatWith(errorFormatter);
  console.log(schemaValidation);
  if (!schemaValidation.isEmpty()) {
    return res.status(422).json({ errors: schemaValidation.array() });
  }
  return next();
}

export default checkSchemaErrors;
