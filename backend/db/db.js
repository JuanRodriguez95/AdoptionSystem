import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with mongoDB: Ok");
  } catch (error) {
    console.log("Error conecting to mongoDB: \n", error);
  }
};

export default { dbConnection };