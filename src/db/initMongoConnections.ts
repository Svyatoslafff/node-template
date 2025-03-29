import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.ts';
import { log } from 'console';

export async function initMongoConnection() {
    try {
        const MongoUser: string = getEnvVar('MONGODB_USER');
        const MongoPassword: string = getEnvVar('MONGODB_PASSWORD');
        const MongoDBName: string = getEnvVar('MONGODB_DB');
        const MongoLink: string = getEnvVar('MONGODB_URL');
        await mongoose.connect(
            `mongodb+srv://${MongoUser}:${MongoPassword}@${MongoLink}/${MongoDBName}?retryWrites=true&w=majority&appName=Cluster`
        );
    } catch (error) {
        console.log(error);
        throw error;
    }
}
