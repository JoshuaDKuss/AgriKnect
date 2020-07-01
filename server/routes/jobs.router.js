const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


  router.post('/', async (req, res) => {
    const farmId = req.user.id;
    console.log(farmId)
    const title = req.body.jobTitle;
    const description = req.body.jobDescription;
    const type = req.body.jobType;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const housing = req.body.housingProvided;
    const housingDetails = req.body.housingDetails;
    const relocationStipend = req.body.relocationProvided;
    const paymentPeriod = req.body.paymentType;
    const paymentAmount = req.body.paymentAmount;
    const createJobPosting = await pool.connect();

    try {
      await createJobPosting.query('BEGIN');
      let queryText = `
        INSERT INTO "jobs" 
        ("user_id", "title", "description", "type", "start_date", "end_date", "housing", 
        "housing_details", "relocation_stipend", "payment_period", "payment_amount")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING "id"
        ;`;
      const result = await createJobPosting.query(queryText, [
        farmId,
        title,
        description,
        type,
        startDate,
        endDate,
        housing,
        housingDetails,
        relocationStipend,
        paymentPeriod,
        paymentAmount,
      ]);
      const jobID = result.rows[0].id;
      console.log('result rows', result.rows[0]);

      await Promise.all(req.body.skills.map(item => {
        let = subQuery = `INSERT INTO "job_proficiencies" 
          ("proficiency_id", "job_id")
          VALUES ($1, $2);
         `;
        createJobPosting.query(subQuery, [ item.id, jobID])
      }))
      await Promise.all(req.body.skills.map(item => {
        let = subQuery = `INSERT INTO "job_proficiencies" 
          ("proficiency_id", "job_id")
          VALUES ($1, $2);
         `;
        createJobPosting.query(subQuery, [item.id, jobID])
      }))
      await Promise.all(req.body.equipment.map(item => {
        let = subQuery = `INSERT INTO "job_proficiencies" 
          ("proficiency_id", "job_id")
          VALUES ($1, $2);
         `;
        createJobPosting.query(subQuery, [item.id, jobID])
      }))
       await Promise.all(req.body.brands.map(item => {
        let = subQuery = `INSERT INTO "job_proficiencies" 
          ("proficiency_id", "job_id")
          VALUES ($1, $2);
         `;
        createJobPosting.query(subQuery, [item.id, jobID])
      }))
      await createJobPosting.query('COMMIT');
      res.sendStatus(200);
    } catch (err) {
      await createJobPosting.query('ROLLBACK');
      throw err;
    } finally {
      createJobPosting.release();
    }

  })

//   const queryText = `
//     INSERT INTO "jobs" 
//     ("farm_id", "title", "description", "type", "start_date", "end_date", "housing", 
//     "housing_details", "relocation_stipend", "payment_period", "payment_amount")
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING "id"
//     ;`;
//     pool
//     .query(queryText, [
//       farmId,
//       title,
//       description,
//       type,
//       startDate,
//       endDate,
//       housing,
//       housingDetails,
//       relocationStipend,
//       paymentPeriod,
//       paymentAmount,
//     ])
//     .then((result) => {
//       let jobID = result.rows[0].id; 
//       console.log('jobID',jobID);
//       res.sendStatus(200);
//         const queryTextSkills = `INSERT INTO "job_proficiencies" 
//           ("proficiency_id", "job_id")
//           VALUES ($1, $2)
//          `
//       pool.query(queryTextSkills, [jobID, action.payload.skills.id]) 
    
//     })
//     .catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         })
// });

// const queryTextTwo = `
//     INSERT INTO "job_proficiencies" 
//     ("proficiency_id", "job_id")
//     VALUES ($1, $2)
//     ;`;

module.exports = router;
