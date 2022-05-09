import express from "express";
import { env } from "process";
import router from "./routes";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(env.PORT, () => {
  console.log("Server started on port 3333");
});
