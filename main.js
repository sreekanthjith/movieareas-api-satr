import express from "express";
const PORT = 6969;

const app = express()


app.get('/', (req, res) => {
  res.json({msg: "Hello student!" });
}); 

app.listen(6969, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});