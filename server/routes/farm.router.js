const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
//get for farm profile
router.get('/:id', (req, res) => {
    let id = req.params.id
    console.log('in router get', [id]);
    const sqlText = ` SELECT "farm"."id", "farm_name", "street_address", "city", "zipcode", "state", "phone", 
    "bio", "first_name", "last_name", "username", "farm"."size", "farm"."type" 
    FROM "user" 
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
        let id = req.params.id
        console.log('in router get', [id]);
        const sqlText = `SELECT "title", "start_date", "payment_amount", "payment_period", "user_id", "jobs"."id" FROM "jobs"
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
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('farm router post');
    const farmQueryText = `INSERT INTO farm ("farm_name", "street_address", "city", "state", "zipcode", 
                        "phone", "size", "type", "bio", "user_id") 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`; //RETURNING "id"?
    const farmValues = [req.body.farm_name, req.body.street_address, req.body.city, req.body.state,
                        req.body.zipcode, req.body.phone, req.body.size, req.body.type, req.body.bio, req.user.id];
    pool.query(farmQueryText, farmValues)
    .then((response)=>{
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('Error POSTING farm to the DB', error);
        res.sendStatus(500);
    })
});



router.put('/:id', (req, res) => {  // '/:id'
     console.log('farm router put', req.body.farm_name, req.body.street_address, req.body.city,
                        req.body.state, req.body.zipcode, req.body.phone, req.body.size, 
                        req.body.bio);
    const queryText = `UPDATE farm
            SET "farm_name" = $2, "street_address"= $3, "city" = $4, "state" = $5, "zipcode" = $6,
            "phone" = $7, "size" = $8, "bio" = $9
            WHERE "id"=$1;`;
    const queryValues = [req.params.id, req.body.farm_name, req.body.street_address, req.body.city,
                        req.body.state, req.body.zipcode, req.body.phone, req.body.size, 
                        req.body.bio];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
            console.log("router put worked!");
        })
        .catch((err) => {
            console.log('Error updating pg, router put pg router', err);
            res.sendStatus(500)
        });
});

//JOB DELETE 
router.delete('/:id', (req, res) => {
    let query = `DELETE FROM jobs WHERE id =  $1`
    let values = [req.params.id]
    pool.query(query, values).then((result)=>{
      res.sendStatus(200);
    }).catch((error) =>{
        console.log(error)
        res.sendStatus(500);
    })
  });

module.exports = router;