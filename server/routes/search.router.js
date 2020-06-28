const express = require('express');
const pool = require('../modules/pool');
const { query } = require('../modules/pool');
const router = express.Router();

router.get('/:searchItem', (req, res) => {
    console.log(req.body)
    const searchItem = req.params.searchItem
    console.log(searchItem)
    const queryText = `
    SELECT "farm"."farm_name", "jobs"."type", "title", "city", "state", 
    "start_date", "end_date", "payment_amount", "payment_period"
    FROM "jobs" 
    JOIN "farm"
    ON "farm"."id" = "farm_id"
    WHERE to_tsvector("title" || ' ' || "jobs"."type" || ' ' || "description" || ' ' || 
    "city" || ' ' || "state" || ' ' || "zipcode") @@ plainto_tsquery('$1');`
    pool.query(queryText, [searchItem])
    .then((response) => {
        res.send(response.rows);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
});


router.post('/', (req, res) => {

});

module.exports = router;