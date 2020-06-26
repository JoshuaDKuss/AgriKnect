const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
//get for farm profile
router.get('/:id', (req, res) => {
    let id = req.user.id
    console.log('in router get', [id]);
    const sqlText = ` SELECT "farm_name", "city", "state", "phone", "bio", "first_name", "last_name", "username", "farm"."size", "farm"."type" FROM "user" 
    JOIN "farm" on "user"."id"="farm"."user_id"
    WHERE "user"."id" = $1;`;
    pool
    .query(sqlText, [id])
    .then((result) => {
      console.log(result.rows)
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
    });
    //get for farmer profile available jobs
    router.get('/jobs/:id', (req, res) => {
        let id = req.user.id
        console.log('in router get', [id]);
        const sqlText = `SELECT "title", "start_date", "payment_amount", "payment_period" FROM "jobs"
        JOIN "user" on "jobs"."user_id"="user"."id"
        WHERE "user"."id" = $1;`;
        pool
        .query(sqlText, [id])
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