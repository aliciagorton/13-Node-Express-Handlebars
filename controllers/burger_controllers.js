let express = require("express");
let burger = require("../models/burger.js");

let router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
        burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  console.log(req.body);
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, 0], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
 
  var condition = "id = " + req.params.id;;

  burger.updateOne({

    devoured: req.body.devoured
  }, 
    condition, function(result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// EXPORT ROUTING
module.exports = router;
