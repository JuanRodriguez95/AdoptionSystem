import user from "../models/user.js";
import role from "../models/role.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerUser = async (req, res) => {
  if (!req.body.name ||
    !req.body.age ||
    !req.body.email ||
    !req.body.whatsapp ||
    !req.body.adress) return res.status(400).send({ message: "Imcomplete data" });

  const existingUser = await user.findOne({ email: req.body.email });

  if (existingUser) return res.status(400).send({ message: "The user is already registered" });

  const passHash = await bcrypt.hash(req.body.password, 10);

  const roleId = await role.findOne({ name: "user" });

  if (!roleId) return res.status(500).send({ message: "No role was assigned" });

  const schemaUser = new user({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    whatsapp: req.body.whatsapp,
    adress: req.body.adress,
    password: passHash,
    role: roleId._id,
    dbStatus: true,
  });

  const myResult = await schemaUser.save();

  if (!myResult) return res.status(500).send({ message: "Fail to register user" });

  try {
    return res.status(200).json({
      token: jwt.sign({
        _id: myResult._id,
        name: myResult.name,
        role: myResult.role,
        iat: moment().unix()
      }, process.env.SK_JWT),
    });
  } catch (error) {
    return res.status(500).send({ message: "register error" });
  }

};

export default { registerUser };