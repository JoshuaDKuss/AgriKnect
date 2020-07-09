const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/:id", (req, res) => {
  let id = req.params.id;
  console.log("in router get", [id]);
  const sqlText = `SELECT "user"."first_name", "user"."last_name", "bio", "city", "state" FROM "user"
  JOIN "talent_user" on "user"."id"="talent_user"."user_id"
  WHERE "user"."id" = $1;`;
  pool
    .query(sqlText, [id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
//get for talent proficiency
router.get("/proficiency/:id", (req, res) => {
  let id = req.params.id;
  console.log("in router get", [id]);
  const sqlText = `SELECT "proficiencies"."id", "proficiency_name", "proficiency_category", "length_experience", "first_name" FROM "user"
JOIN "user_proficiencies" on "user"."id"="user_proficiencies"."user_id"
JOIN "proficiencies" on "user_proficiencies"."proficiency_id"="proficiencies"."id"
WHERE "user"."id" = $1;`;
  pool
    .query(sqlText, [id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
//get for talent certification for profile page
router.get("/certification/:id", (req, res) => {
  let id = req.params.id;
  console.log("in router get", [id]);
  const sqlText = `SELECT "certification"."id", "certification_name", "issuing_company", "issue_date", "expiration_date" FROM "user"
JOIN "certification" on "user"."id"="certification"."user_id"
WHERE "user"."id" = $1;`;
  pool
    .query(sqlText, [id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.get("/education/:id", (req, res) => {
  let id = req.params.id;
  console.log("in router get", [id]);
  const sqlText = `SELECT "education"."id", "institution_name", "degree", "start_date", "end_date" FROM "user"
JOIN "education" on "user"."id"="education"."user_id"
WHERE "user"."id" = $1;`;
  pool
    .query(sqlText, [id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

//get for talent employment
router.get("/employment/:id", (req, res) => {
  let id = req.params.id;
  console.log("in router get", [id]);
  const sqlText = `SELECT "employment"."id", "employer_name", "title", "start_date", "end_date" FROM "user"
JOIN "employment" on "user"."id"="employment"."user_id"
WHERE "user"."id" = $1;;`;
  pool
    .query(sqlText, [id])
    .then((result) => {
      console.log(result.rows);
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

router.post("/", async (req, res) => {
  console.log(req.body);
  const userId = req.user.id;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;
  const bio = req.body.bio;
  const userForm = true;

  const createTalentProfile = await pool.connect();

  try {
    await createTalentProfile.query("BEGIN");
    const talentUserQuery = `
    INSERT INTO "talent_user" (city, state, zipcode, bio, user_id) 
    VALUES ($1, $2, $3, $4, $5);
  `;
    const result = await createTalentProfile.query(talentUserQuery, [
      city,
      state,
      zipcode,
      bio,
      userId,
    ]);

    await Promise.all(
      req.body.certification.map((item) => {
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
      })
    );

    await Promise.all(
      req.body.employment.map((item) => {
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
      })
    );

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
      req.body.equipment.map((item) => {
        let equipmentQuery = `INSERT INTO "user_proficiencies" ("proficiency_id", "user_id") VALUES ($1, $2); 
      `;
        createTalentProfile.query(equipmentQuery, [item.id, userId]);
      })
    );

    await Promise.all(
      req.body.brands.map((item) => {
        let brandQuery = `INSERT INTO "user_proficiencies" ("proficiency_id", "user_id") VALUES ($1, $2); 
      `;
        createTalentProfile.query(brandQuery, [item.id, userId]);
      })
    );

    await Promise.all(
      req.body.skillsExpertise.map((item) => {
        let skillsQuery = `INSERT INTO "user_proficiencies" ("proficiency_id", "length_experience", "user_id") VALUES ($1, $2, $3); 
      `;
        createTalentProfile.query(skillsQuery, [
          item.skillID,
          item.time,
          userId,
        ]);
      })
    );

    let userFormQuery = `UPDATE "user" SET "form_complete" = $1 WHERE "id" = $2;`;

    await createTalentProfile.query(userFormQuery, [userForm, userId]);

    await createTalentProfile.query("COMMIT");
    res.sendStatus(200);
  } catch (err) {
    await createTalentProfile.query("ROLLBACK");
    res.sendStatus(500);
    throw err;
  } finally {
    createTalentProfile.release();
  }
});

router.put("/skills/:id", async (req, res) => {
  console.log("REQ.PARAMS", req.params.id, "REQ.BODY", req.body);
  const skills = req.body;
  console.log("skills", skills);
  const userId = req.params.id;
  const updateTalentProfile = await pool.connect();

  try {
    await updateTalentProfile.query("BEGIN");
    let queryStringSelect = `SELECT "user_proficiencies"."id" FROM "user_proficiencies" JOIN "proficiencies" 
    ON "proficiencies"."id" = "proficiency_id" WHERE "user_proficiencies"."user_id" = $1 
    AND("proficiency_category" = 'Precision Farming Technology' OR "proficiency_category" = 'General Agriculture'  
    OR "proficiency_category" = 'Maintenance and Mechanics' OR "proficiency_category" = 'Trucking');
    `;
    const result = await updateTalentProfile.query(queryStringSelect, [userId]);
    console.log("result", result.rows);

    await Promise.all(
      result.rows.map((item) => {
        let = deleteQuery = `DELETE from "user_proficiencies" WHERE "id" = $1;`;
        updateTalentProfile.query(deleteQuery, [item.id]);
      })
    );

    await Promise.all(
      req.body.map((item) => {
        let = insertQuery = `INSERT INTO "user_proficiencies" (proficiency_id, length_experience, user_id) 
      VALUES ($1, $2, $3);
      `;
        updateTalentProfile.query(insertQuery, [
          item.skillID,
          item.time,
          userId,
        ]);
      })
    );

    await updateTalentProfile.query("COMMIT");
    res.sendStatus(200);
  } catch (err) {
    await updateTalentProfile.query("ROLLBACK");
    res.sendStatus(500);
    console.log(err);
    throw err;
  } finally {
    updateTalentProfile.release();
  }
});

router.put("/equipment/:id", async (req, res) => {
  console.log("REQ.PARAMS", req.params.id, "REQ.BODY", req.body);
  const skills = req.body;
  console.log("skills", skills);
  const userId = req.params.id;
  const updateTalentProfile = await pool.connect();

  try {
    await updateTalentProfile.query("BEGIN");
    let queryStringSelect = `SELECT "user_proficiencies"."id" FROM "user_proficiencies" JOIN "proficiencies" 
    ON "proficiencies"."id" = "proficiency_id" WHERE "user_proficiencies"."user_id" = $1 
    AND("proficiency_category" = 'Brand' OR "proficiency_category" = 'Equipment');
    `;
    const result = await updateTalentProfile.query(queryStringSelect, [userId]);
    console.log("result", result.rows);

    await Promise.all(
      result.rows.map((item) => {
        let = deleteQuery = `DELETE from "user_proficiencies" WHERE "id" = $1;`;
        updateTalentProfile.query(deleteQuery, [item.id]);
      })
    );

    await Promise.all(
      req.body.map((item) => {
        let = insertQuery = `INSERT INTO "user_proficiencies" (proficiency_id, user_id) 
      VALUES ($1, $2);
      `;
        updateTalentProfile.query(insertQuery, [item.id, userId]);
      })
    );

    await updateTalentProfile.query("COMMIT");
    res.sendStatus(200);
  } catch (err) {
    await updateTalentProfile.query("ROLLBACK");
    res.sendStatus(500);
    console.log(err);
    throw err;
  } finally {
    updateTalentProfile.release();
  }
});

router.put("/certifications", async (req, res) => {
  console.log("USER ID", req.user.id, "REQ.BODY", req.body);
  const certifications = req.body;
  const userId = req.user.id;
  const updateTalentProfile = await pool.connect();

  try {
    await updateTalentProfile.query("BEGIN");
    let queryStringSelect = `SELECT "certification"."id" FROM "certification" WHERE "certification"."user_id" = $1; 
    
    `;
    const result = await updateTalentProfile.query(queryStringSelect, [userId]);
    console.log("result", result.rows);

    await Promise.all(
      result.rows.map((item) => {
        let = deleteQuery = `DELETE from "certification" WHERE "id" = $1;`;
        updateTalentProfile.query(deleteQuery, [item.id]);
      })
    );

    await Promise.all(
      req.body.map((item) => {
        let = insertQuery = `INSERT INTO "certification" (certification_name, issuing_company, issue_date, expiration_date, user_id) 
      VALUES ($1, $2, $3, $4, $5);
      `;
        updateTalentProfile.query(insertQuery, [
          item.certificate,
          item.issuingCompany,
          item.issueDate,
          item.expirationDate,
          userId,
        ]);
      })
    );

    await updateTalentProfile.query("COMMIT");
    res.sendStatus(200);
  } catch (err) {
    await updateTalentProfile.query("ROLLBACK");
    res.sendStatus(500);
    console.log(err);
    throw err;
  } finally {
    updateTalentProfile.release();
  }
});

router.put("/education", async (req, res) => {
  console.log("USER ID", req.user.id, "REQ.BODY", req.body);
  const education = req.body;
  const userId = req.user.id;
  const updateTalentProfile = await pool.connect();

  try {
    await updateTalentProfile.query("BEGIN");
    let queryStringSelect = `SELECT "education"."id" FROM "education" WHERE "education"."user_id" = $1; 
    
    `;
    const result = await updateTalentProfile.query(queryStringSelect, [userId]);
    console.log("result", result.rows);

    await Promise.all(
      result.rows.map((item) => {
        let = deleteQuery = `DELETE from "education" WHERE "id" = $1;`;
        updateTalentProfile.query(deleteQuery, [item.id]);
      })
    );

    await Promise.all(
      req.body.map((item) => {
        let = insertQuery = `INSERT INTO "education" (institution_name, degree, start_date, end_date, user_id) 
      VALUES ($1, $2, $3, $4, $5);
      `;
        updateTalentProfile.query(insertQuery, [
          item.school,
          item.degree,
          item.startDate,
          item.endDate,
          userId,
        ]);
      })
    );

    await updateTalentProfile.query("COMMIT");
    res.sendStatus(200);
  } catch (err) {
    await updateTalentProfile.query("ROLLBACK");
    res.sendStatus(500);
    console.log(err);
    throw err;
  } finally {
    updateTalentProfile.release();
  }
});

router.put("/employment", async (req, res) => {
  console.log("USER ID", req.user.id, "REQ.BODY", req.body);
  const employment = req.body;
  const userId = req.user.id;
  const updateTalentProfile = await pool.connect();

  try {
    await updateTalentProfile.query("BEGIN");
    let queryStringSelect = `SELECT "employment"."id" FROM "employment" WHERE "employment"."user_id" = $1; 
    
    `;
    const result = await updateTalentProfile.query(queryStringSelect, [userId]);
    console.log("result", result.rows);

    await Promise.all(
      result.rows.map((item) => {
        let = deleteQuery = `DELETE from "employment" WHERE "id" = $1;`;
        updateTalentProfile.query(deleteQuery, [item.id]);
      })
    );

    await Promise.all(
      req.body.map((item) => {
        let = insertQuery = `INSERT INTO "employment" (employer_name, title, start_date, end_date, user_id) 
      VALUES ($1, $2, $3, $4, $5);
      `;
        updateTalentProfile.query(insertQuery, [
          item.company,
          item.title,
          item.startDate,
          item.endDate,
          userId,
        ]);
      })
    );

    await updateTalentProfile.query("COMMIT");
    res.sendStatus(200);
  } catch (err) {
    await updateTalentProfile.query("ROLLBACK");
    res.sendStatus(500);
    console.log(err);
    throw err;
  } finally {
    updateTalentProfile.release();
  }
});

module.exports = router;
