import adoption from "../models/adoption.js";
import user from "../models/user.js";
import animal from "../models/animal.js";

const registerAdop = async (req, res) => {
  if (!req.body.user || !req.body.animal) return res.status(400).send({ message: "Imcomplete data" });

  const emailUser = await user.findOne({ email: req.body.user });
  if (emailUser) return res.status(400).send({ message: "The user is already registered" });

  const idAnimal = await animal.findOne({ idAnimal: req.body.animal });
  if (idAnimal) return res.status(400).send({ message: "The animal is already registered" });

  const schemaAdop = new adoption({
    user: req.body.user,
    animal: req.body.animal,
    description: req.body.description,
    dbStatus: true,
  });

  const myResult = await schemaAdop.save();

  if (!myResult) return res.status(500).send({ message: "Fail to register adoption" });

  res.status(200).send({ myResult });
};

export default { registerAdop };