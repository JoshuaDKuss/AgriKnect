const express = require('express');
const pool = require('../modules/pool');
const { query } = require('../modules/pool');
const router = express.Router();

router.get('/:searchItem', (req, res) => {
    const searchItem = req.params.searchItem
    console.log(searchItem)
    const queryText = `
    SELECT "farm"."user_id", "jobs"."id", "farm"."farm_name", "jobs"."type", "title", "street_address", "city", "state", 
    "zipcode", "latitude", "longitude", "start_date", "end_date", "payment_amount", "payment_period", 
    "description", ARRAY_AGG("proficiency_name") AS proficiencies
    FROM "jobs" 
    JOIN "farm"
    ON "jobs"."user_id" = "farm"."user_id"
    JOIN "job_proficiencies"
    ON "jobs"."id" = "job_proficiencies"."job_id"
    JOIN "proficiencies"
    ON "proficiency_id" = "proficiencies"."id"
    WHERE to_tsvector("title" || ' ' || "jobs"."type" || ' ' || "description" 
    || ' ' || "city" || ' ' || "state" || ' ' || "zipcode") @@ plainto_tsquery($1)
    GROUP BY "farm"."user_id", "farm"."farm_name", "jobs"."type", "title", "street_address", "city", "state", "zipcode",
    "latitude", "longitude", "start_date", "end_date", "payment_amount", "payment_period", "description", "jobs"."id";`
    
    pool.query(queryText, [searchItem])
    .then((response) => {
        console.log(response.rows)
        res.send(response.rows);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
});


router.post('/', (req, res) => {

});

module.exports = router;