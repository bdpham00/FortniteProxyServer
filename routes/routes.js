var service = require('../service/service');

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/GetFortnitePlayerStats", function (req, res) {
        service.getFortniteData(function(data) {          
          res.status(200).send(data);
        });
      });
  }
  
  module.exports = appRouter;