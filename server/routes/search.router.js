const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
//GET for job search
router.get('/:searchItem', (req, res) => {
    console.log('in router get', [id]);

    const sqlText = `SELECT "farm"."farm_name", "jobs"."type", "title", "city", "state", "start_date", "end_date", "payment_amount", "payment_period"
    FROM "jobs" 
    JOIN "farm"
    ON "jobs"."user_id" = "farm"."user_id"
    WHERE to_tsvector("title" || ' ' || "jobs"."type" || ' ' || "description" || ' ' || "city" || ' ' || "state" || ' ' || "zipcode") @@ plainto_tsquery($1);`;
    pool
    .query(sqlText, [req.params.searchItem])
    .then((result) => {
      console.log(result.rows)
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
    });

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;