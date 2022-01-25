import Mongoose from "mongoose";
const MagasinSchema: Mongoose.Schema = new Mongoose.Schema({
  adresse: {
    type: String
  },

});

export interface IUser extends Mongoose.Document {
    nom?: String;
    prenom?: String;
    email?: String;
    password?: String;
    CIN?: String;
}

export default Mongoose.model<IUser>("User", MagasinSchema);
