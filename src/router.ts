import express from "express";
import { ClawController } from "./controller/DataController";
import { ESL_2020_2021 } from "./data";
import { league, venue } from "./type";
import ObjectsToCsv from "objects-to-csv";

const router = express.Router();
const clawController = new ClawController();

router.get("/bet", (req, res) => {
  console.log("Get");
  let data = clawController.optimizeResult(ESL_2020_2021.data);
  res.status(200).json({
    msg: "Success",
    data,
  });
});

router.get("/bet/excel", (req, res) => {
  clawController.createEcelFile(
    clawController.optimizeResult(ESL_2020_2021.data)
  );
  return res.download(`${__dirname}/match.xlsx`);
});

// GET CORNER DATA

router.get("/bet/esl/:venue/:year", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.ESL,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });
  res.status(200).json({ status: "Success", DATA: { data, content } });
});

router.get("/bet/esl/:venue/:year/csv", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.ESL,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  const csv = new ObjectsToCsv(data);
  let fileName = content.replace(/ /g, "").replace(/\//g, "-");
  await csv.toDisk(`./src/${fileName}.csv`);

  res.download(`${__dirname}/${fileName}.csv`);
});

router.get("/bet/ec/:venue/:year", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.EC,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  res.status(200).json({ status: "Success", DATA: { data, content } });
});

router.get("/bet/ec/:venue/:year/csv", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.EC,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  const csv = new ObjectsToCsv(data);
  let fileName = content.replace(/ /g, "").replace(/\//g, "-");
  await csv.toDisk(`./src/${fileName}.csv`);

  res.download(`${__dirname}/${fileName}.csv`);
});

router.get("/bet/bundesliga/:venue/:year", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.Bundesliga,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  res.status(200).json({ status: "Success", DATA: { data, content } });
});

router.get("/bet/bundesliga/:venue/:year/csv", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.EC,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  const csv = new ObjectsToCsv(data);
  let fileName = content.replace(/ /g, "").replace(/\//g, "-");
  await csv.toDisk(`./src/${fileName}.csv`);

  res.download(`${__dirname}/${fileName}.csv`);
});

router.get("/bet/seria/:venue/:year", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.Seria,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  res.status(200).json({ status: "Success", DATA: { data, content } });
});

router.get("/bet/seria/:venue/:year/csv", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.EC,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  const csv = new ObjectsToCsv(data);
  let fileName = content.replace(/ /g, "").replace(/\//g, "-");
  await csv.toDisk(`./src/${fileName}.csv`);

  res.download(`${__dirname}/${fileName}.csv`);
});

router.get("/bet/laliga/:venue/:year", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.Laliga,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  res.status(200).json({ status: "Success", DATA: { data, content } });
});

router.get("/bet/laliga/:venue/:year/csv", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.Laliga,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  const csv = new ObjectsToCsv(data);
  let fileName = content.replace(/ /g, "").replace(/\//g, "-");
  await csv.toDisk(`./src/${fileName}.csv`);

  res.download(`${__dirname}/${fileName}.csv`);
});

router.get("/bet/league1/:venue/:year", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.League1,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  res.status(200).json({ status: "Success", DATA: { data, content } });
});

router.get("/bet/league1/:venue/:year/csv", async (req, res) => {
  if (!["all", "home", "away"].includes(req.params.venue))
    return res.status(400).json({
      status: "Faile",
      msg: "Param venue is wrong, use all, home, away instead",
    });

  const { data, content } = await clawController.getCornerData({
    league: league.League1,
    venue: venue[req.params.venue],
    season: `31/07/${req.params.year}`,
  });

  const csv = new ObjectsToCsv(data);
  let fileName = content.replace(/ /g, "").replace(/\//g, "-");
  await csv.toDisk(`./src/${fileName}.csv`);

  res.download(`${__dirname}/${fileName}.csv`);
});

export default router;
