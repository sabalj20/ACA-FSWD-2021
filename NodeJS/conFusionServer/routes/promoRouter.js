const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => 
{
    res.statusCode = 200;
    res.setHeader("Conetnt-Type", "text/plain");
    next();
})
.get((req, res, next) => 
{
    res.end("Will send you all the promotions");
})
.post((req, res, next) =>
{
    res.end("Will add the promotion " + res.body.name + "with description " + res.body.description);
})
.put((req, res, next) => 
{
    res.statusCode = 403;
    res.end("PUT request not supported on /promotions");
})
.delete((req, res, next) =>
{
    res.end("Will delete all the promotions");
});

promoRouter.route('/:promoId')
.all((req, res, next) => 
{
    res.statusCode = 200;
    res.setHeader("Conetnt-Type", "text/plain");
    next();
})
.get((req, res, next) => 
{
    res.end("Will send you the details of promotion : " + req.params.promoId);
})
.post((req, res, next) =>
{
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put((req, res, next) => 
{
    res.write("Updating the promotion: " + req.params.promoId + "\n");
    res.end("Update the promotion with name: " + req.body.name + " with details: " + req.body.description);
})
.delete((req, res, next) =>
{
    res.end("Will delete the promotion: " + req.params.promoId);
});

module.exports = promoRouter;