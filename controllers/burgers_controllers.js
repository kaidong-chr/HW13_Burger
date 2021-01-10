let express = require("express");
// Import our model - burger.js for it's db functions
let burger = require("../models/burger");

let router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function (result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.updateOne("devoured", condition, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.deleteOne(condition, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});

// Export routes for server.js to use.
module.exports = router;
