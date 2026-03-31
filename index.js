import express from "express";
const app = express();
app.get("/api/health", (req, res) => {
  return res.status(200).json({
    message: "done",
  });
});

app.listen(4000, () => {
  console.log("server is running on port : ", 4000);
});

