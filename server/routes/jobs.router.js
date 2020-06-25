const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.get("/", (req, res) => {});


router.post("/", (req, res) => {
  console.log(req.body);
  const farmId = req.user.id;
  const title = req.body.title;
  const description = req.body.description;
  const type = req.body.type;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const housing = req.body.housing;
  const housingDetails = req.body.housingDetails;
  const relocationStipend = req.body.relocationStipend;
  const paymentPeriod = req.body.paymentPeriod;
  const paymentAmount = req.body.paymentAmount;

  const queryText = `
    INSERT INTO "jobs" 
    ("farm_id", "title", "description", "type", "start_date", "end_date", "housing", 
    "housing_details", "relocation_stipend", "payment_period", "payment_amount")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    ;`;
  pool
    .query(queryText, [
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
    ])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
