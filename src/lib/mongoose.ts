import mongoose from "mongoose";

//buat koneksi ke mongodb
const connectionMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectionMongoDb;
