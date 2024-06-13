import mongoose from "mongoose";
 const Connectdb=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log(`Connected to database`);
  } catch (error) {
    console.log("Database is not connected");
    throw error
  }
};



export default Connectdb;

