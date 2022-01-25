import  i18n from '../../services/i18n';
const MIN_PASSWORD_LENGTH = 6;
const MIN_CIN_LENGTH  = 8;
export const loginSchema = {
    email: {
      exists: {
        errorMessage: i18n.__('user.validation.required_email'),
      },
      isEmail: {
        errorMessage: i18n.__('user.validation.invalid_email'),
      },
    },
    password: {
      exists: {
        errorMessage: i18n.__('user.validation.required_password'),
      },
    },
  };
/**
 * POST /api/v1/auth/registration
 * POST /api/v1/users
 */

  export const createUserSchema = {
    email: {
      exists: {
        errorMessage: i18n.__('user.validation.required_email'),
      },
      isEmail: {
        errorMessage: i18n.__('user.validation.invalid_email'),
      },
      // currently removing the dot from emails, we still need to normalize it though
      // normalizeEmail: {
      //   errorMessage: i18n.__('user.validation.required_email'),
      // },
    },
    prenom: {
      exists: {
        errorMessage: i18n.__('user.validation.required_firstname'),
      },
      isLength: {
        errorMessage: i18n.__('user.validation.firstname_length'),
        options: { min: 1, max: 45 },
      },
      custom: {
        options(prenom) {
          // Regex option
          const nameRegex = /^[A-zÀ-ÿ- ]+$/;
  
          if (prenom.match(nameRegex)) {
            return true;
          }
          return false;
        },
        errorMessage: i18n.__('user.validation.invalid_firstName_format'),
      },
    },
    nom: {
      exists: {
        errorMessage: i18n.__('user.validation.required_lastname'),
      },
      isLength: {
        errorMessage: i18n.__('user.validation.lastname_length'),
        options: { min: 1, max: 45 },
      },
      custom: {
        options(nom) {
          // Regex option
          const nameRegex = /^[A-zÀ-ÿ- ]+$/;
  
          if (nom.match(nameRegex)) {
            return true;
          }
          return false;
        },
        errorMessage: i18n.__('user.validation.invalid_lastName_format'),
      },
    },
    phone: {
      exists: {
        errorMessage: i18n.__('user.validation.required_phone_number'),
      },
      isMobilePhone: {
        errorMessage: i18n.__('user.validation.invalid_phone_number'),
      },
      isLength: {
        errorMessage: i18n.__('user.validation.invalid_phone_number'),
        options: { min: 12, max: 12 },
      },
    },
    password: {
      isLength: {
        errorMessage: i18n.__('user.validation.short_password'),
        // Multiple options would be expressed as an array
        options: { min: MIN_PASSWORD_LENGTH },
      },
    },
    CIN: {
      isLength: {
        errorMessage: i18n.__('user.validation.short_CIN'),
        // Multiple options would be expressed as an array
        options: { min: MIN_CIN_LENGTH },
      },
    },
    origin: {
      optional: true,
      custom: {
        options: (value, { req }) => {
          if (req.body.origin) {
            /* origin :0 agent de sousse
               origin : 1 agent de sfax
               origin : 2 agent de tunis
            */

            const origins = [0, 1, 2];
            if (!origins.includes(req.body.origin)) {
              throw new Error(`Origins must be either one of ${origins}`);
            }
            return value;
          }
          return true;
        },
      },
    },
  };