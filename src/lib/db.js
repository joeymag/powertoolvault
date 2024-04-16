import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

let cached = (global).mongoose;

if (!cached) {
    cached = (global).mongoose = { conn: null, promise: null };
}

export const conect = async () => {
    if (cached.conn) 
        return cached.conn;
    
        cached.promise = cached.promise || mongoose.connect(MONGODB_URI,  {
            dbName: "powertoolvault",
            bufferCommands: false,
            connectTimeoutMS: 30000,
        })
        cached.conn = await cached.promise;

        return cached.conn;
         
}