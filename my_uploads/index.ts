import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import upload from "./router/pixRouter";

const app: Application = express();

const port: number = 2277;

app.use(express.json());
app.use(cors());

app.use("/", upload);

app.listen(port, () => {
  console.log("server connected");
  dbConfig();
});
