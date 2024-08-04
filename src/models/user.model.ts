import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new Schema({
    id: { type: Number, require: false },
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
});

export const User = mongoose.model<IUser>('User', UserSchema);

