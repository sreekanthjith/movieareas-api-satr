import express from "express";
const PORT = 6969;

const app = express()


app.get('/', (req, res) => {
  res.json({msg: "Hello student!" });
}); 

//CRUD functionality of movies
app.get('/movies', () => {

});

// R- For Reading
app.get('/movies', () => {
  
});

// For creating movies
app.post('/movies', () => {
  
});

///U- For updating movie
app.put('/movies/:id', () => {
  
});

// D - For deleting movie
app.delete('/movies/:id', () => {
  
});


app.listen(6969, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});