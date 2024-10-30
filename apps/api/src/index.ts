import { json, urlencoded } from "body-parser";
import express from "express";
import { createServer } from "http";
import morgan from "morgan";
import cors from "cors";

const port = process.env.PORT || 3001;

const app = express();
const server = createServer(app);

app
  .disable("x-powered-by")
  .use(morgan("dev"))
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(cors());

server.listen(port, () => {
  console.log(`api running on ${port}`);
});

app.get("/message/:name", (req, res) => {
  return res.json({ message: `hello ${req.params.name}` });
});

app.get("/status", (_, res) => {
  return res.json({ ok: true });
});
