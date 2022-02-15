import mongoose from "mongoose";

const adopSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "users" },
  animal: { type: mongoose.Schema.ObjectId, ref: "animals" },
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const adop = mongoose.model("adops", adopSchema);

export default adop;