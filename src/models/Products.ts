import mongoose, { Schema } from "mongoose";

interface IProduct {
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
