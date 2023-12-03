import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App successfully connected to database');  
        //HTTP Requests
        app.get('/', (request, response) => {
            console.log(request);
            return response.status(202).send('Welcome to MERN Stack Tutorial!');
        })
    })
    .catch((error)=>{
        console.log(`Error : ${error}`);
    })

app.listen(PORT, ()=> {
    console.log(`App is listening to ${PORT}`);
})