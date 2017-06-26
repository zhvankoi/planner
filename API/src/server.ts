import * as express from 'express';

import * as planItem from './actions/plan-item';

let app = express();

planItem.init(app);

app.get('/', (req, res) => {
  res.send('planner app');
});

app.listen(3000, () => {
  console.log('Server started. Port: 3000 (localhost:3000)');
});

process.on('SIGTERM', () => {
  console.log('Server was stopped');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Ctrl+C was pressed. Server was stopped');
  process.exit(0);
});

export default app;
