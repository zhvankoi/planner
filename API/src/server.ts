import * as express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, (): void => {
  console.log('Server started. Port: 3000 (localhost:3000)');
});

export default app;
