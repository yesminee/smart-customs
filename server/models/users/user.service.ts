import db from '../../helpers/db';
import  i18n from '../../services/i18n';
const { User }= db;
import jwt from "jsonwebtoken";
import Bcrypt from "bcryptjs";
import AuthenticationError from '../../error/AuthenticationError';
import userModel from './user.model';

export const authenticate = async ({
    email, motDePasse,
  }) => {
    let foundUser = await User.findOne({ email: email });
    if (!foundUser || !Bcrypt.compareSync(motDePasse, foundUser.password)) {
        throw new AuthenticationError(i18n.__('user.authentication.invalid_credentials'));
    }
    let token = jwt.sign(
      // @ts-ignore
      { _id: foundUser._id },
      // @ts-ignore
      process.env.JWT_SECRET
    );
    const payload = {
        sub: foundUser.id,
        email: foundUser.email,
        nom: foundUser.nom,
        prenom: foundUser.prenom,
        numeroTel: foundUser.phone,
        role: foundUser.role,
        origin: foundUser.origin,
      };
    
      const accessToken = jwt.sign(payload,//@ts-ignore 
        process.env.JWT_SECRET);
    
      return { data: { accessToken, user: foundUser} };
};
export const registration = async ({
    email, nom, prenom, motDePasse, numeroTel, cin
  }) => {
    //if ((await isEmailExist(req.body.email)) === false) throw 403;
    let isEmailUsed = await User.findOne({ email });
    if (isEmailUsed) {
      console.log(i18n.__('user.authorization.email_used'));
        throw new AuthenticationError(i18n.__('user.authorization.email_used'));
    }
    let salt = Bcrypt.genSaltSync(8);
    motDePasse = Bcrypt.hashSync(motDePasse, salt);
  
    let newUser = new User({
      email: email.toLowerCase(),
      nom,
      prenom,
      motDePasse,
      salt,
      numeroTel,
      cin
    });
    await newUser.save();
  
    const addedUser = await User.findOne({ email });
    console.log(i18n.__('user.user_not_found'));
    if (!addedUser) {
        throw new AuthenticationError(i18n.__('user.user_not_found'));
    }
  
    let token = jwt.sign(
      { _id: addedUser._id },
      // @ts-ignore
      process.env.JWT_SECRET
    );
    /*
      if (newUser.email)
      await sendEmail({
        to: newUser.email,
        html: `<h3> Click the link below to validate your account! </h3>
      <a href="https://redzaun.herokuapp.com/api/v1/auth/validate-email?token=${token}">https://redzaun.herokuapp.com/api/v1/auth/validate-email?token=${token}</a>`,
        subject: "Email validation",
      })
        .then((res) => console.log("res " + res))
        .catch((err) => console.log("error " + err));
        */
    return { data: { token, user: addedUser } };
};
export const getAllUsers = async () => {
const Users = await User.find();
console.log(Users)
 return Users;
}
export const updateUserData = async({
  id, email, nom, prenom, numeroTel, cin}) =>{
    const user = await User.findOne({_id:id});
    if (!user) {
      throw new AuthenticationError(i18n.__('user.user_not_found'));
    }
    Object.assign(user, {
      email,
      nom,
      prenom,
      numeroTel,
      cin
    });
  
    await user.save();
  
    return user;
  }
