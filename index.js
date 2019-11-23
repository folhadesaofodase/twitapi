import express from "express";
import bodyParser from "body-parser";
import service from "./src/service";
import { resolve } from "dns";
const app = express();
app.use(bodyParser.json());

app.post("/twit", async function(req, res) {
  console.log(req.body)
  const success = await service.tweet(req.body)
  if (success) return res.sendStatus(200);
  res.sendStatus(500);
  res.send('Erro ao twittar!')
});

app.listen(3000, '0.0.0.0');
