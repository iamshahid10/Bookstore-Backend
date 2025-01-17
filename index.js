import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import bookRoute from './Routes/bookRoute.js';
import userRoute from './Routes/userRoute.js'
import cors from 'cors'

const app = express()
app.use(cors());
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

try {
    mongoose.connect(URI)
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error:",error);
}

app.use('/book',bookRoute)
app.use('/user',userRoute)

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})