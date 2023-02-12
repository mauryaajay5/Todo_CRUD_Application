import mongoose from "mongoose";


// schema of database
const userSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  email: {
    type: String,
  },
  phoneno: {
    type: String,
  },
  college:{
    type:String,
  }
});

export default mongoose.model("user", userSchema, "user");


