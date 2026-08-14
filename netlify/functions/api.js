import express from "express";
import serverless from "serverless-http";

const app = express();

// 기존 Vercel 함수들 불러오기
import indexCard from "../../api/index.js";
import pinCard from "../../api/pin.js";
import topLangsCard from "../../api/top-langs.js";
import wakatimeCard from "../../api/wakatime.js";
import gistCard from "../../api/gist.js";

// 엔드포인트 라우팅 연결
app.get("/api", indexCard);
app.get("/api/pin", pinCard);
app.get("/api/top-langs", topLangsCard);
app.get("/api/wakatime", wakatimeCard);
app.get("/api/gist", gistCard);

export const handler = serverless(app);
