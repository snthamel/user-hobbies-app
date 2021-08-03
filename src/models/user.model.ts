import mongoose from 'mongoose';
import { HobbyDocument } from './hobby.model';

export interface UserDocument extends mongoose.Document {
    name: string,
    hobbies: Array<HobbyDocument['_id']>
}

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hobbies: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hobby' }], required: false, default: [] }
});

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;
