import { Router } from "express";

import {
  createPhrase,
  deletePhrase,
  getPhrase,
  getPhrases,
  updatePhrase,
} from "../controllers/phrase.controller.js";

const router = Router();

router.get("/phrase", getPhrases);

router.post("/phrase", createPhrase);

router.get("/phrase/:id", getPhrase);

router.delete("/phrase/:id", deletePhrase);

router.put("/phrase/:id", updatePhrase);

export default router;
