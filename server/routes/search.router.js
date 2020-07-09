const express = require("express");
const pool = require("../modules/pool");
const { query } = require("../modules/pool");
const router = express.Router();

router.get("/:searchItem", (req, res) => {
  const searchItem = req.params.searchItem;
  console.log(searchItem);
  const queryText = `
    SELECT "farm"."user_id", "jobs"."id", "farm"."farm_name", "farm"."type", "title", "street_address", "city", "state", 
    "zipcode", "latitude", "longitude", "start_date", "end_date", "payment_amount", "payment_period", 
    "description", "relocation_stipend", "housing", "housing_details", ARRAY_AGG("proficiency_name") AS proficiencies
    FROM "jobs" 
    JOIN "farm"
    ON "jobs"."user_id" = "farm"."user_id"
    JOIN "job_proficiencies"
    ON "jobs"."id" = "job_proficiencies"."job_id"
    JOIN "proficiencies"
    ON "proficiency_id" = "proficiencies"."id"
    WHERE to_tsvector("title" || ' ' || "farm"."type" || ' ' || "description" 
    || ' ' || "city" || ' ' || "state" || ' ' || "zipcode" || ' ' || "farm_name") @@ plainto_tsquery($1)
    GROUP BY "farm"."user_id", "farm"."farm_name", "farm"."type", "title", "street_address", "city", "state", "zipcode",
    "latitude", "longitude", "start_date", "end_date", "payment_amount", "payment_period", "description", "relocation_stipend", "housing", "housing_details","jobs"."id";`;

  pool
    .query(queryText, [searchItem])
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {});

module.exports = router;
