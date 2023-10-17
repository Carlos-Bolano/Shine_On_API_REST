import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import phraseRouter from "./routes/phrase.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRouter);
app.use("/api", phraseRouter);

export default app;
