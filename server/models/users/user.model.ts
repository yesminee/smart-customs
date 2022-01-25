import Mongoose from "mongoose";
const ROLE_SUPER = 'DRD';
const ROLE_ADMIN = 'BFC';
const ROLE_CLIENT = 'client';
const UserSchema: Mongoose.Schema = new Mongoose.Schema({
  nom: {
    type: String
  },
  prenom: {
    type: String
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  CIN: {
    type: String,
  },
  role: {
    type: String,
    enum: [
      ROLE_CLIENT,
      ROLE_ADMIN,
      ROLE_SUPER,
    ],
    default: ROLE_CLIENT,
  },
  origin: {
    type: Number,
  },
});

export interface IUser extends Mongoose.Document {
    nom?: String;
    prenom?: String;
    email?: String;
    password?: String;
    CIN?: String;
}

export default Mongoose.model("User", UserSchema);
