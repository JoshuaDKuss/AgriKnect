const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const queryText = `
    SELECT * FROM "proficiencies"
    ;`;
  pool
    .query(queryText)
    .then((result) => {
      const categories = {
        brands: [],
        trucking: [],
        generalAgriculture: [],
        precisionFarmingTechnology: [],
        equipment: [],
        maintenanceAndMechanics: [],
      };
      for (let i = 0; i < result.rows.length; i++) {
        if (result.rows[i].proficiency_category === "Brand") {
          categories.brands.push(result.rows[i]);
        } else if (result.rows[i].proficiency_category === "Trucking") {
          categories.trucking.push(result.rows[i]);
        } else if (
          result.rows[i].proficiency_category === "General Agriculture"
        ) {
          categories.generalAgriculture.push(result.rows[i]);
        } else if (
          result.rows[i].proficiency_category === "Precision Farming Technology"
        ) {
          categories.precisionFarmingTechnology.push(result.rows[i]);
        } else if (result.rows[i].proficiency_category === "Equipment") {
          categories.equipment.push(result.rows[i]);
        } else if (
          result.rows[i].proficiency_category === "Maintenance and Mechanics"
        ) {
          categories.maintenanceAndMechanics.push(result.rows[i]);
        }
      }
      res.send(categories);
    })
    .catch(() => res.sendStatus(500));
});

router.get("/user", (req, res) => {
  const Id = req.user.id;
  const queryText = `
    SELECT array_agg("proficiency_name") AS proficiencies 
    FROM "proficiencies"
    JOIN "user_proficiencies" ON "proficiency_id" = "proficiencies"."id"
    WHERE "user_id" = '${Id}';`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {});

module.exports = router;
