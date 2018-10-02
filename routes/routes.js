var service = require('../service/service');

var appRouter = function (app) {
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/GetFortnitePlayerStats/:platform/:username", function (req, res) {
      var params = {
        "platform": req.params.platform,
        "username": req.params.username
      }

        service.getFortniteData(params, function(data) {          
          res.status(200).send(data);
        });
      });
  }
  
  module.exports = appRouter;