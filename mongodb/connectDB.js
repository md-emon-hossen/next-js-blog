import mongoose from "mongoose";

export const connnectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/blog-model');
    console.log("db is connected");

}

