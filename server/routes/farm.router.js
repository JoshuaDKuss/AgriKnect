const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/farm/:id', rejectUnauthenticated, (req, res) => {
    let id = req.user.id
    console.log('in farm router get', [id]);
    const sqlText = `SELECT * FROM farm ORDER BY "id";`; /// match to user id!
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
    const farmQueryText = `INSERT INTO farm ("farm_name", "farm_address", "city", "state", "zipcode", 
        "phone", "size", "type", "bio") 
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`; //RETURNING "id"?
    const farmValues = [req.body.farm_name, req.body.farm_address, req.body.city, req.body.city,
        req.body.state, req.body.zipcode, req.body.phone, req.body.size, req.body.type, req.body.bio];
    pool.query(farmQueryText, farmValues)
    .then((response)=>{
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('Error POSTING farm to the DB', error);
        res.sendStatus(500);
    })
});



router.put('/:id', rejectUnauthenticated, (req, res) => {  // '/:id'
     console.log('pg router put');
    //console.log('router put', req.body);
    const queryText = `UPDATE farm
            SET "farm_name" = $2, "farm_address"= $3, "city" = $4, "state" = $5, "zipcode" = $6,
            "phone" = $7, "size" = $8, "type" = $9, "bio" = $10
            WHERE "id"=$1`;
    const queryValues = [req.body.id, req.body.farm_name, req.body.description];
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


module.exports = router;