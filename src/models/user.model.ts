import { IUser } from "../interfaces/user.interface";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    id: { type: Number, require: false },
    name: { type: Number, require: true },
    lastname: { type: Number, require: true },
    email: { type: Number, require: true },
    password: { type: Number, require: true }
});

export const User = mongoose.model<IUser>('User', UserSchema);

