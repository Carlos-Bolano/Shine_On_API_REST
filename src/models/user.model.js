import mongoose from "mongoose";

const userSchemal = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchemal);
