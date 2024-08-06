import cors from "cors";
import express from "express";

const port = 3001;
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(`/`, handler);

function handler(req, res) {
  res.status(200).end('Hello World In main Hello!');
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
