import mongoose from 'mongoose';
import CONFIG from '../config/config';

if (CONFIG.APP !== 'test') {
    mongoose
        .connect(`mongodb://${CONFIG.DB_HOST}:${CONFIG.DB_PORT}/${CONFIG.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log('MongoDB connection successful')
        })
        .catch((err) => {
            console.error(`MongoDB connection unsuccessful:`, err);
        });
}
