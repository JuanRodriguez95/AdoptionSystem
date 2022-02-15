import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  idAnimal: String,
  name: String,
  race: String,
  weight: Number,
  height: Number,
  healt: String,
  age: Number,
  dbStatus: Boolean,
});

const animal = mongoose.model("animals", animalSchema);

export default animal;