import express from "express";
import { router } from "./main/routes/router";

const app = express();
app.use(router);

app.listen(3000, () => {
  console.log("api rodando");
});
