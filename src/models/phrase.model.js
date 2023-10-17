import mongoose from "mongoose";

const phraseSchemal = new mongoose.Schema({
  phrase: {
    type: String,
    required: true,
    thim: true,
  },
  author: {
    type: String,
    default: "Shine On",
    thim: true,
  },
});

export default mongoose.model("Phrase", phraseSchemal);
