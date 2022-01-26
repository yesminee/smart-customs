import db from '../../helpers/db';
import  i18n from '../../services/i18n';
const { User }= db;
import jwt from "jsonwebtoken";
import Bcrypt from "bcryptjs";
import AuthenticationError from '../../error/AuthenticationError';

export const authenticate = async ({
    email, password, origin,
  }) => {
    let foundUser = await User.findOne({ email: email, origin: origin });
    if (!foundUser || !Bcrypt.compareSync(password, foundUser.password)) {
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
        phone: foundUser.phone,
        role: foundUser.role,
        origin: foundUser.origin,
      };
    
      const accessToken = jwt.sign(payload,//@ts-ignore 
        process.env.JWT_SECRET);
    
      return { data: { accessToken, user: foundUser} };
};
export const registration = async ({
    email, nom, prenom, password, origin, phone, CIN
  }) => {
    //if ((await isEmailExist(req.body.email)) === false) throw 403;
    let isEmailUsed = await User.findOne({ email });
    if (isEmailUsed) {
        throw new AuthenticationError(i18n.__('user.authorization.email_used'));
    }
    let salt = Bcrypt.genSaltSync(8);
    password = Bcrypt.hashSync(password, salt);
  
    let newUser = new User({
      email: email.toLowerCase(),
      nom,
      prenom,
      password,
      salt,
      origin,
      phone,
      CIN
    });
    await newUser.save();
  
    const addedUser = await User.findOne({ email });
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
       console.log(addedUser)
    return { data: { token, user: addedUser } };
};