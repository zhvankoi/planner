import * as express from 'express';

import * as getPlanItemHandler from './get-plan-item';

export function init(app: express.Application) {

  app.get('/plan/item/:id', (req, res) => {
    getPlanItemHandler.getPlanItemHandler(req, res);
  });
}