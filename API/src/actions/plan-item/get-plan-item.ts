import * as express from 'express';

export function getPlanItemHandler(req: express.Request, res: express.Response) {
  res.status(200).json({
    id: 1,
    title: 'todo',
    content: 'need to create this awsome project',
    scheduled: new Date(2017, 8, 31)
  });
}