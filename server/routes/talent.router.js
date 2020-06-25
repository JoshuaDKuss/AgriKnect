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

router.post('/', async (req, res) => {
  const userId = req.user.id;
  const city = req.body.location.city;
  const state = req.body.location.state;
  const zipcode = req.body.location.zipcode;
  const bio = req.body.bio;

  const createTalentProfile = await pool.connect();

try {
  await createTalentProfile.query('BEGIN');
    const talentUserQuery = `
    INSERT INTO "talent_user" (city, state, zipcode, bio, user_id) 
    VALUES ($1, $2, $3, $4, $5);
  `;
    const result = await createTalentProfile.query(talentUserQuery, [city, state, zipcode, bio, userId]);
    
    await Promise.all(req.body.certification.map(item => {
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

  await Promise.all(req.body.employment.map(item => {
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
    req.body.education.map((item) => {
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
    req.body.equipment.map( async (item) => {
      let equipmentQuery = `SELECT "id" FROM "proficiencies" WHERE "proficiency_name" = $1
      `;
      let result = await createTalentProfile.query(equipmentQuery, [
        item
      ]);
      console.log('result', result)
      // let subQuery = `INSERT INTO "user_proficiencies" (proficiency_id, user_id) VALUES ($1, $2) `; 
      //  createTalentProfile.query(subQuery, [
      //   result,
      //   userId
      // ]);

    })
  );

  await createTalentProfile.query('COMMIT');
    res.sendStatus(200);
  } catch (err) {
  await createTalentProfile.query('ROLLBACK');
    throw err;
  } finally {
  createTalentProfile.release();
  }
})

//post request to add favorite cocktail
// router.post('/', async (req, res) => {

//   let recipe = req.body.cocktailDetails;
//   const createRecipe = await pool.connect();
//   try {
//     await createRecipe.query('BEGIN');
//     let queryText = `INSERT INTO "favorite_drink" ("api_id","drink_name", "image_url", "method", "comments", "user_id")
//          VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id"; `;
//     const result = await createRecipe.query(queryText, [recipe.idDrink, recipe.strDrink, recipe.strDrinkThumb, recipe.strInstructions, req.body.comments, req.body.id]);
//     const newRecipeId = result.rows[0].id;
//     console.log('result rows', result.rows[0]);

//     await Promise.all(req.body.certification.map(item => {
//       let = certificationQuery = `INTO "certifications" (certification_name, issuing_company, issue_date, expiration_date, user_id) 
//       VALUES ($1, $2, $3, $4, $5);
// `;
//       createRecipe.query(subQuery, [newRecipeId, item])
//     }))
//     await createRecipe.query('COMMIT');
//     res.sendStatus(200);
//   } catch (err) {
//     await createRecipe.query('ROLLBACK');
//     throw err;
//   } finally {
//     createRecipe.release();
//   }

// })

// initialSkills: [ 'Tillage', 'John Deere Autotrac', 'Straight truck' ],
// skillsExpertise: [
//   { skill: 'Tillage', time: '5 years' },
//   { skill: 'John Deere Autotrac', time: '10 years' },
//   { skill: 'Straight truck', time: '2 years' }
// ],
// equipment: [ 'Tractor (any size)', 'Self-propelled silage chopper' ],
// brands: [ 'Allis Chalmers' ],
// certification: [
//   {
//     key: 0,
//     certificate: 'jkdljf',
//     issuingCompany: 'dsafd',
//     issueDate: '2017-05-29',
//     expirationDate: '2017-05-27'
//   }
// ],
// education: [
//   {
//     key: 0,
//     school: 'dsfd',
//     degree: 'dsafds',
//     startDate: '2017-05-29',
//     endDate: '2017-05-27'
//   }
// ],
// employment: [
//   {
//     key: 0,
//     company: 'sdfds',
//     title: 'dsafds',
//     startDate: '2017-05-08',
//     endDate: '2017-05-04'
//   }
// ],
// location: { city: 'dsaf', state: 'dsafs', zipcode: 'dsafds' },
// bio: 'sdafds'
// }

/**
 * POST route template
 */


// router.post('/', (req, res) => {
// console.log('talent form input:', req.body);
// console.log(req.user)
// const userId = req.user.id

// // user_proficiencies
// const skillsExpertise = req.body.skillsExpertise;
// const equipment = req.body.equipment;
// const brands = req.body.brands;

// // certification table
// const certifications = req.body.certifications;

// // education table
// const education = req.body.education;

// // talent_user table
// const city = req.body.location.city;
// const state = req.body.location.state;
// const zipcode = req.body.location.zipcode;
// const latitude = req.body.location.latitude;
// const longitude = req.body.location.longitude;
// const bio = req.body.bio;

// const userProficienciesQuery = `
// INSERT INTO "user_proficiencies" () 
// VALUES ();
// `;

// const certificationQuery = `
// INSERT INTO "certification" (certification_name, issuing_company, issue_date, expiration_date, user_id) 
// VALUES ($1, $2, $3, $4, $5);
// `;

// const educationQuery = `
// INSERT INTO "education" (institution_name, degree, start_date, end_date, user_id) 
// VALUES ($1, $2, $3, $4, $5);
// `;

// const talentUserQuery = `
// INSERT INTO "talent_user" (city, state, zipcode, latitude, longitude, bio, user_id) 
// VALUES ($1, $2, $3, $4, $5, $6);
// `;

// for (item of education) {
//     pool.query(educationQuery, [item.school, item.degree, item.startDate, item.endDate, userId])
// }

// pool.query(talentUserQuery, [city, state, zipcode, latitude, longitude, bio, userId])
//   .then(() => res.sendStatus(201))
//   .catch(() => res.sendStatus(500));
// });


module.exports = router;