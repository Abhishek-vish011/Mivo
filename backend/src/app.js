import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controller/socketManager.js";

import cors from "cors";
import userRoutes from "./route/usersRoute.js"


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));
app.use("/api/v1/users", userRoutes);


const start = async () =>{
    const connectionDB = await mongoose.connect("mongodb+srv://abhivishwa012002:SwtcTTxLNU5wU1lo@cluster0.b6facrz.mongodb.net/");
    console.log(`MONGO Connection DB Host: ${connectionDB.connection.host}`);
    server.listen(app.get("port"), ()=>{
        console.log("LISTENIING ON PORT 8000")
    });
}

start();