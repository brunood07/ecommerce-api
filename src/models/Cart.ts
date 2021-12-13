import mongoose, { Schema } from "mongoose";

interface ICart {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  };
}

const CartSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<ICart>("Cart", CartSchema);
