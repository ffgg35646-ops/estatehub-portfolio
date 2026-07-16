import mongoose, { Schema, Model } from "mongoose";


export interface IUser {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: "user" | "agent" | "admin";
  avatar?: string;
}


const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },


    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },


    phone: {
      type: String,
      default: "",
    },


    password: {
      type: String,
      required: true,
      minlength: 6,
    },


    role: {
      type: String,
      enum: ["user", "agent", "admin"],
      default: "user",
    },


    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);



const User: Model<IUser> =
  mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);


export default User;
