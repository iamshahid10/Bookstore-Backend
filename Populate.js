import dotenv from "dotenv"
import Book from "./Model/bookModel.js" 
import data from '../Frontend/public/list.json' assert { type: 'json' };
dotenv.config();
import mongoose from 'mongoose';

const URI = process.env.MongoDBURI

const start = async () => {

  try {
    await mongoose.connect(URI)
    await Book.deleteMany()
    await Book.create(data)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()