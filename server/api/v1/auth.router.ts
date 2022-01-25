import { Router } from "express";
import user from "../../models/user.model";
import jwt from "jsonwebtoken";
import Bcrypt from "bcryptjs";

const router = Router();

router.post("/login", async (req, res) => {
  let foundUser = await user.findOne({ email: req.body.email });
  if (!foundUser) throw 404;
  // @ts-ignore
  let verifyPassword = Bcrypt.compareSync(
    req.body.password,
    // @ts-ignore
    foundUser.password
  );
  if (verifyPassword === false) throw 400;
  // @ts-ignore
  // @ts-ignore
  let token = jwt.sign(
    // @ts-ignore
    { _id: foundUser._id },
    // @ts-ignore
    process.env.JWT_SECRET
  );
  res.status(200).json({ token, user: foundUser });
});

router.post("/signup", async (req, res) => {
  //if ((await isEmailExist(req.body.email)) === false) throw 403;
  let isEmailUsed = await user.findOne({ email: req.body.email });

  if (isEmailUsed) throw 400;
  let salt = Bcrypt.genSaltSync(8);
  req.body.password = Bcrypt.hashSync(req.body.password, salt);
  req.body.salt = salt;

  let newUser = new user({
    email: req.body.email.toLowerCase(),
    password: req.body.password,
    salt: req.body.salt,
  });
  await newUser.save();

  const addedUser = await user.findOne({ email: req.body.email });
  if (!addedUser) throw 500;

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
  return res.status(201).json({ token, user: newUser });
});

export default router;
