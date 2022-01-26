import Mongoose from "mongoose";
const ROLE_SUPER = "DRD";
const ROLE_ADMIN = "BFC";
const ROLE_CLIENT = "client";
const UserSchema: Mongoose.Schema = new Mongoose.Schema(
  {
    nom: {
      type: String,
    },
    prenom: {
      type: String,
    },
    email: {
      type: String,
    },
    motDePasse: {
      type: String,
    },
    cin: {
      type: String,
    },
    role: {
      type: String,
      enum: [ROLE_CLIENT, ROLE_ADMIN, ROLE_SUPER],
      default: ROLE_CLIENT,
    },
    origin: {
      type: Number,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export interface IUser extends Mongoose.Document {
  nom?: String;
  prenom?: String;
  email?: String;
  motDePasse?: String;
  cin?: String;
}

export default Mongoose.model("User", UserSchema);
