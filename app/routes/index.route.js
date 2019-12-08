const express = require('express');
const rootRouter = express.Router();
const baseRouter = require('./api/base.router');

rootRouter.get('/', function(req, res, next) {
    res.send('<h1>BASE API</h1>')
});

rootRouter.use('/base', baseRouter);
 
module.exports = rootRouter;