import express from "express";
import path from "path";
import cors from "cors";
import * as bodyParser from "body-parser";
import router from "./router";

const main = () => {
  const app = express();

  app.use(express.static(path.join(__dirname)));
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const port = process.env.PORT || 3000;

  app.use("/", router);

  app.listen(port, () => console.log(`Server is listenning at port ${port}`));
};

main();
