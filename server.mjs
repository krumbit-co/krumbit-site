import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT || 3000);
const root = path.dirname(fileURLToPath(import.meta.url));
const staticDir = path.join(root, "dist", "static");

app.disable("x-powered-by");
app.use(express.static(staticDir, { extensions: ["html"] }));

app.get("/healthz", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.get("/{*path}", (_request, response) => {
  response.sendFile(path.join(staticDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Krumbit web server listening on port ${port}`);
});
