import animal from "../models/animal.js"

const registerAnimal = async (req, res) => {
  if (!req.body.idAnimal ||
    !req.body.name ||
    !req.body.race ||
    !req.body.weight ||
    !req.body.height ||
    !req.body.healt ||
    !req.body.age) return res.status(400).send({ message: "Imcomplete Data" });

  let schemaAnimal = new animal({
    idAnimal: req.body.idAnimal,
    name: req.body.name,
    race: req.body.race,
    weight: req.body.weight,
    height: req.body.height,
    healt: req.body.healt,
    age: req.body.age,
    dbStatus: true,
  });

  let myResult = await schemaAnimal.save();

  if (!myResult) return res.status(500).send({ message: "Fail to register animal" });

  res.status(200).send({ myResult });
};

export default { registerAnimal };