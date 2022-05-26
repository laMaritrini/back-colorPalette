import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { Palette } from '../models/Palette-model.js';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    let dbName;
    if (process.env.NODE_ENV === 'test') {
        dbName = process.env.TESTDBNAME;
    } else {
        dbName = process.env.DBNAME;
    }
    console.log('Connecting to', dbName);
    const uri = `mongodb+srv://${user}:${password}@cluster0.mrify.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}
export async function mongoDisconnect() {
    return mongoose.disconnect();
}

export async function installData(data) {
    const deleted = await Palette.deleteMany({});
    const result = await Palette.insertMany(data);
    return { result, deleted };
}
