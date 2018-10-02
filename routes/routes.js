var service = require('../service/service');

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/GetFortnitePlayerStats", function (req, res) {
        var data = service.getFortniteData();
        res.status(200).send({"test": [1,2,3,4]});
      });
  }
  
  module.exports = appRouter;