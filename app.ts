/*app.ts*/
import express, { Express } from "express";
import { rollTheDice } from "./dice";
import { sdk } from "./instrumentation";

const PORT: number = parseInt(process.env.PORT || "8080");
const app: Express = express();

sdk.start()

app.get("/rolldice", async (req, res) => {
  const rolls = req.query.rolls ? parseInt(req.query.rolls.toString()) : NaN;
  if (isNaN(rolls)) {
    res
      .status(400)
      .send("Request parameter 'rolls' is missing or not a number.");
    return;
  }

  await new Promise(resolve => setTimeout(() => {
    console.log("delayed response");
    res.send(JSON.stringify(rollTheDice(rolls, 1, 6)));
  }, 3000))
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
