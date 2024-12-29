import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express with TypeScript!');
});


app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express with TypeScript!' });
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
