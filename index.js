import express from "express";
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "auth-service OK" });
});

app.listen(3001, () => {
  console.log("Auth service running on port 3001");
});
