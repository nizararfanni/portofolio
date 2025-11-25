import mongoose from "mongoose";

//schema artikel
const ArticlesSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//connect model database or crate new model
const Articles =
  mongoose.models.Articles || mongoose.model("Articles", ArticlesSchema);

export default Articles;
