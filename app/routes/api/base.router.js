const express = require('express');
const baseRouter = express.Router();
const baseCtrl = require('../../controllers/base.ctrl');

baseRouter.get('/', baseCtrl.getStart);

module.exports = baseRouter;