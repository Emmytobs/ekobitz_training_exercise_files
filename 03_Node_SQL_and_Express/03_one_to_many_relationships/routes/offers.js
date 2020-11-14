const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../db");

router.get("/graduates/:id/offers", async (req, res, next) => {
  try {
    // Get the specific graduate based on the id in the URL
    const graduate = await db.query("SELECT * FROM graduates WHERE id=$1", [
      req.params.id
    ]);
    // Get all the offers where the graduate_id is the same as on the one in the URL
    const offers = await db.query(
      "SELECT company,title FROM offers WHERE graduate_id=$1",
      [req.params.id]
    );
    // set a property on graduate.rows[0] (which is the specific grad found) called offers
    // the value of the offers property will be an array of offers we get back from the 2nd query
    graduate.rows[0].offers = offers.rows;
    return res.json(graduate.rows[0]);
  } catch (e) {
    return next(e);
  }
});

// Here we are just adding another route/endpoint to add an offer for a specific grad
router.post("/graduates/:id/offers", async (req, res, next) => {
  try {
    const graduate = await db.query(
      "INSERT INTO offers (company, title, graduate_id) VALUES ($1, $2, $3)",
      [req.body.company, req.body.title, req.params.id]
    );
    // depending on what we want our API to respond with, we might need to make some additional queries, or we can just send back a simple message.
    return res.json({ message: "Created" });
  } catch (e) {
    return next(e);
  }
});

// router.get("/:id", async (req, res, next) => {
router.get("/graduates/:graduate_id/offers/:id", async (req, res, next) => {
  try{
    const { graduate_id, id } = req.params;
    const offers = await db.query("SELECT title from offers WHERE graduate_id=$1 AND id=$2;", [graduate_id, id])
    if(offers.rows.length == 0) {
      res.json({message: "No match for the offer id"})
    }
    res.json(offers.rows)
  } catch(error) {
    return next(error)
  }
})

router.patch("/graduates/:graduate_id/offers/:id", async (req, res, next) => {
  try {
    const { graduate_id, id } = req.params;
    const offers = await db.query("UPDATE offers SET title=$1 WHERE graduate_id=$2 AND id=$3;", [req.body.title, graduate_id, id])
    if(offers.rows.length == 0) {
      res.json({message: "No match for the offer id"})
    }
    res.json(offers.rows)
  } catch(error) {
    return next(error)
  }
})

router.delete("/graduates/:graduate_id/offers/:id", async (req, res, next) => {
  try {
    const { graduate_id, id } = req.params;
    const { title } = req.params;
    const offers = await db.query("DELETE FROM offers WHERE title=$1 AND graduate_id=$2 AND id=$3;", [title, graduate_id, id])
    if(offers.rows.length == 0) {
      res.json({message: "No match for the offer id"})
    }
    res.json(offers.rows)
  } catch(error) {
    return next(error)
  }
})

module.exports = router;