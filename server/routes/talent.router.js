const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    let id = req.params.id
  console.log('in router get', [id]);
  const sqlText = `SELECT "user"."first_name", "user"."last_name", "bio", "city", "state" FROM "user"
  JOIN "talent_user" on "user"."id"="talent_user"."user_id"
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
//get for talent proficiency
router.get('/proficiency/:id', (req, res) => {
let id = req.params.id
console.log('in router get', [id]);
const sqlText = `SELECT "proficiency_name", "proficiency_category", "length_experience", "first_name" FROM "user"
JOIN "user_proficiencies" on "user"."id"="user_proficiencies"."user_id"
JOIN "proficiencies" on "user_proficiencies"."proficiency_id"="proficiencies"."id"
WHERE "user"."id" = $1;`;
// const sqlText = `SELECT "proficiency_name", "proficiency_category", "length_experience", "first_name" FROM "user"
// JOIN "user_proficiencies" on "user"."id"="user_proficiencies"."user_id"
// JOIN "proficiencies" on "user_proficiencies"."proficiency_id"="proficiencies"."id"
// WHERE "user"."id" = $1
// AND "proficiency_category" LIKE 'Precision Farming Technology;`
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

router.post('/', async (req, res) => {
  console.log(req.body)
  const userId = req.user.id;
  const city = req.body.formData.location.city;
  const state = req.body.formData.location.state;
  const zipcode = req.body.formData.location.zipcode;
  const bio = req.body.formData.bio;

  const createTalentProfile = await pool.connect();

try {
  await createTalentProfile.query('BEGIN');
    const talentUserQuery = `
    INSERT INTO "talent_user" (city, state, zipcode, bio, user_id) 
    VALUES ($1, $2, $3, $4, $5);
  `;
    const result = await createTalentProfile.query(talentUserQuery, [city, state, zipcode, bio, userId]);
    
    await Promise.all(req.body.formData.certification.map(item => {
      let = certificationQuery = `INSERT INTO "certification" (certification_name, issuing_company, issue_date, expiration_date, user_id) 
      VALUES ($1, $2, $3, $4, $5);
      `;
      createTalentProfile.query(certificationQuery, [
        item.certificate,
        item.issuingCompany,
        item.issueDate,
        item.expirationDate,
        userId,
      ]);
    }))

  await Promise.all(req.body.formData.employment.map(item => {
    let = employmentQuery = `INSERT INTO "employment" (employer_name, title, start_date, end_date, user_id) 
      VALUES ($1, $2, $3, $4, $5);
      `;
    createTalentProfile.query(employmentQuery, [
      item.company,
      item.title,
      item.startDate,
      item.endDate,
      userId,
    ]);
  }))

  await Promise.all(
    req.body.formData.education.map((item) => {
      let = educationQuery = `INSERT INTO "education" (institution_name, degree, start_date, end_date, user_id) 
      VALUES ($1, $2, $3, $4, $5);
      `;   
      createTalentProfile.query(educationQuery, [
        item.school,
        item.degree,
        item.startDate,
        item.endDate,
        userId,
      ]);
    })
  );

  await Promise.all(
    req.body.formData.equipment.map((item) => {
      let equipmentQuery = `INSERT INTO "user_proficiencies" ("proficiency_id", "user_id") VALUES ($1, $2); 
      `;
      createTalentProfile.query(equipmentQuery, [
        item.id,
        userId
      ]);
    })
  );

  await Promise.all(
    req.body.formData.brands.map((item) => {
      let brandQuery = `INSERT INTO "user_proficiencies" ("proficiency_id", "user_id") VALUES ($1, $2); 
      `;
      createTalentProfile.query(brandQuery, [
        item.id,
        userId
      ]);
    })
  );

  await Promise.all(
    req.body.formData.skillsExpertise.map((item) => {
      let skillsQuery = `INSERT INTO "user_proficiencies" ("proficiency_id", "length_experience", "user_id") VALUES ($1, $2, $3); 
      `;
      createTalentProfile.query(skillsQuery, [
        item.skillId,
        item.time,
        userId
      ]);
    })
  );

  await createTalentProfile.query('COMMIT');
    res.sendStatus(200);
  } catch (err) {
  await createTalentProfile.query('ROLLBACK');
    res.sendStatus(500);
    throw err;
  } finally {
  createTalentProfile.release();
  }
})




module.exports = router;