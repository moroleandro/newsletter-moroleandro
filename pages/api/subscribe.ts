import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url from 'url';

let cacheDb: Db = null;

async function connectToDatabase(uri: string){
    if(cacheDb){
        return cacheDb;
    }
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const dbName = url.parse(uri).pathname.substr(1);

    const db = client.db(dbName);

    cacheDb = db;

    return db;
}

export default async (request: NowRequest, response: NowResponse) => {
    const { name, email } = request.body;
    const cappName = name[0].toUpperCase() + name.substr(1);
    const cappEmail = email.toLowerCase();

    const db = await connectToDatabase(process.env.MONGODB_URI);
    const collection = db.collection('subscribers');

    const validExistEmail = await collection.findOne({cappEmail});

    if(validExistEmail){
        return response.status(200).json({status: "mail already exist database"});
    }

    await collection.insertOne({
        cappName,
        cappEmail,
        flgValid: false,
        flgSend: true,
        subscribedAt: new Date(),
    });

    return response.status(201).json({status: true});
}