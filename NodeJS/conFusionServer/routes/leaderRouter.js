const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => 
{
    res.statusCode = 200;
    res.setHeader("Conetnt-Type", "text/plain");
    next();
})
.get((req, res, next) => 
{
    res.end("Will send you all the name of the leaders");
})
.post((req, res, next) =>
{
    res.end("Will add the name of the leader: " + res.body.name + "with details " + res.body.description);
})
.put((req, res, next) => 
{
    res.statusCode = 403;
    res.end("PUT request not supported on /leaders");
})
.delete((req, res, next) =>
{
    res.end("Will delete all the names of the leaders");
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => 
{
    res.statusCode = 200;
    res.setHeader("Conetnt-Type", "text/plain");
    next();
})
.get((req, res, next) => 
{
    res.end("Will send you the details of the leader: " + req.params.leaderId);
})
.post((req, res, next) =>
{
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put((req, res, next) => 
{
    res.write("Updating the information on the leader: " + req.params.leaderId + "\n");
    res.end("Update the leader name: " + req.body.name + " with details: " + req.body.description);
})
.delete((req, res, next) =>
{
    res.end("Will delete the leader: " + req.params.leaderId);
});

module.exports = leaderRouter;