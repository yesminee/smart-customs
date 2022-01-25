import Mongoose from "mongoose";

const UserSchema: Mongoose.Schema = new Mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  password: String,
  CIN: String,
});

export interface IUser extends Mongoose.Document {
    nom?: String;
    prenom?: String;
    email?: String;
    password?: String;
    CIN?: String;
}

export default Mongoose.model<IUser>("User", UserSchema);
