import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import "dotenv/config.js";
import OpenRouter from "./routers/OpenRouter.js";
import UserRouter from "./routers/UserRouter.js";
import CategoryRouter from "./routers/CategoryRouter.js";
import ProductRouter from "./routers/ProductRouter.js";


const URI = `mongodb+srv://huybui:${process.env.DB_PASSWORD}@cluster0.yhgvzlp.mongodb.net/?retryWrites=true&w=majority`;

const app = express()
const httpServer = http.createServer(app);
app.use(cors(),bodyParser.json());
app.use("/",OpenRouter)
app.use("/",UserRouter)
app.use("/",ProductRouter)
app.use("/",CategoryRouter)
mongoose.set("strictQuery", false);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to DB");
    await new Promise((resolvers) =>
      httpServer.listen({ port: process.env.PORT || 3000, resolvers })
    );

    console.log(`🚀 GraphQL server is ready`);
  });