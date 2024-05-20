// Create web server
const express = require('express');
const app = express();

// Add middleware
app.use(express.json());

// Define routes 
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/comments', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/api/comments/:id', (req, res) => {
  res.send(req.params.id);
});

app.post('/api/comments', (req, res) => {
  if (!req.body.content || req.body.content.length < 3) {
    res.status(400).send('Content is required and should be at least 3 characters long');
    return;
  }

  const comment = {
    id: comments.length + 1,
    content: req.body.content
  };
  comments.push(comment);
  res.send(comment);
});

// Define environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));