var db = require("../models/flickr.js");
var express = require("express");
var router = express.router();


router.get("/flickr", function(req, res) {
  /services/rest/?method=flickr.galleries.getPhoto&api_key=1748d065e98eb8052cc29c44d00fbdec
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
});

