import express from "express";
const app = express();
app.get("/api/health", (req, res) => {
  return res.status(200).json({
    message: "done",
  });
});
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "hello",
  });
});

app.listen(4000, "0.0.0.0", () => {
  console.log("server is running on port : ", 4000);
});
