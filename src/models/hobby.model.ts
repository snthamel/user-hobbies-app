import mongoose from 'mongoose';

export interface HobbyDocument extends mongoose.Document {
    name: string,
    passionLevel: string,
    year: number
}

const HobbySchema = new mongoose.Schema({
    name: { type: String, required: true },
    passionLevel: { type: String, required: true },
    year: { type: Number, }
});

const Hobby = mongoose.model<HobbyDocument>('Hobby', HobbySchema);

export default Hobby;
