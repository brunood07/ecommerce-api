import mongoose, { Schema } from "mongoose";

export interface IProduct {
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

const ProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
