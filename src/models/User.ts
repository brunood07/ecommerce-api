import mongoose, { Schema } from "mongoose";

export interface IUser {
  username: string;
  full_name: string;
  email: string;
  password: string;
  cpf: number;
  phone: number;
  address: string;
  id?: string;
  isAdmin?: boolean;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cpf: { type: Number, required: true, unique: true },
    phone: { type: Number },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
