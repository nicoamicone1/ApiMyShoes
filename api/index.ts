import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from "./src/routes/index"
import "./src/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});