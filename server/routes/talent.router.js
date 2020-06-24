const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    let id = req.params.id
  console.log('in router get', [id]);
  const sqlText = `SELECT "user"."first_name", "user"."last_name", "bio", "city", "state", "employer_name", "title", "employment"."start_date", "employment"."end_date", "proficiency_name", "proficiency_category", "length_experience", "certification_name", "issuing_company" FROM "user"
  JOIN "talent_user" on "user"."id"="talent_user"."user_id"
  JOIN "certification" on "user"."id"="certification"."user_id"
  JOIN "employment" on "user"."id"="employment"."user_id"
  JOIN "education" on "user"."id"="education"."user_id"
  JOIN "user_proficiencies" on "user"."id"="user_proficiencies"."user_id"
  JOIN "proficiencies" on "user_proficiencies"."proficiency_id"="proficiencies"."id"
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