import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  whatsapp: Number,
  adress: String,
  password: String,
  registerDate: { type: Date, default: Date.now },
  role: { type: mongoose.Schema.ObjectId, ref: "roles" },
  dbStatus: Boolean,
});

const user = mongoose.model("users", userSchema);

export default user;