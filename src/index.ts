import express from "express";
import path from "path";
import cors from "cors";
import * as bodyParser from "body-parser";
import { ClawController } from "./controller/dataController";
import { leage } from "./type";
import { ESL_2020_2021 } from "./data";
import { data } from "cheerio/lib/api/attributes";

const main = () => {
  const app = express();
  const clawController = new ClawController();

  app.use(express.static(path.join(__dirname)));
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const port = process.env.PORT || 8080;

  app.get("/esl", (req, res) => {
    let data = clawController.optimizeResult(ESL_2020_2021.data);
    res.status(200).json({
      msg: "Success",
      data,
    });
  });

  app.get("/excel", (req, res) => {
    clawController.createEcelFile(
      clawController.optimizeResult(ESL_2020_2021.data)
    );
    return res.download(`${__dirname}/match.xlsx`);
  });

  app.listen(port, () => console.log(`Server is listenning at port ${port}`));
};

main();
