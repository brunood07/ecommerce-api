import mongoose, { Schema } from "mongoose";

interface IOrder {
  userId: string;
  products: {
    productId: string;
    quantity: number;
    amount: number;
    address: string;
    status: string;
  };
}

const OrderSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
