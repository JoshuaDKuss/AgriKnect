
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "user_id" SERIAL PRIMARY KEY,
    "firstName" VARCHAR (50) NOT NULL,
    "lastName" VARCHAR (50) NOT NULL,
    "email" VARCHAR (100) NOT NULL,
    "password" VARCHAR (50) NOT NULL,
    "type" VARCHAR (50)
);
CREATE TABLE "talent_user" (
    "bio" VARCHAR (1000),
    "city" VARCHAR (100),
    "state" VARCHAR (100),
    "zipcode" INTEGER,
    "user_id" INT REFERENCES "user"
);
CREATE TABLE "farm" (
    "id" SERIAL PRIMARY KEY,
    "farm_name" VARCHAR (1000),
    "street_address" VARCHAR (200),
    "city" VARCHAR (100),
    "state" VARCHAR (100),
    "zipcode" INTEGER,
    "phone" INTEGER,
    "size" INTEGER,
    "type" VARCHAR (50),
    "bio" VARCHAR (1000),
    "user_id" INT REFERENCES "user"
);
CREATE TABLE "certification" (
    "id" INTEGER,
    "certification_name" VARCHAR (100),
    "issuing_company" VARCHAR (100),
    "issue_date" DATE,
    "expiration_date" DATE,
    "user_id" INT REFERENCES "user"
);
CREATE TABLE "employment" (
    "id" INTEGER,
    "employer_name" VARCHAR (100),
    "title" VARCHAR (100),
    "start_date" DATE,
    "end_date" DATE,
    "user_id" INT REFERENCES "user"
);
CREATE TABLE "jobs" (
    "id" INT PRIMARY KEY,
    "farm_id" INT REFERENCES "farm",
    "title" VARCHAR (100),
    "description" VARCHAR (100),
    "type" VARCHAR (100),
    "start_date" DATE,
    "end_date" DATE,
    "housing" BOOLEAN,
    "housing_details" VARCHAR (100),
    "relocation_stipend" BOOLEAN,
    "payment_period" VARCHAR (100),
    "payment_amount" INT
);
CREATE TABLE "job_proficiencies" (
    "id" INTEGER,
    "proficiency_id" INTEGER,
    "job_id" INT REFERENCES "jobs"
);
CREATE TABLE "proficiencies" (
    "id" INTEGER PRIMARY KEY,
    "proficiency_name" VARCHAR (50),
    "proficiency_category" VARCHAR (100)
);
CREATE TABLE "user_proficiencies" (
    "id" INTEGER,
    "proficiency_id" INT REFERENCES "proficiencies",
    "length_experience" VARCHAR (100),
    "user_id" INTEGER
);
CREATE TABLE "education" (
    "id" INTEGER,
    "institution_name" VARCHAR (100),
    "degree" VARCHAR (100),
    "start_date" DATE,
    "end_date" DATE,
    "user_id" INT REFERENCES "user"
);

