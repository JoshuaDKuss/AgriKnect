CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "email" VARCHAR (100) NOT NULL,
    "password" VARCHAR (50) NOT NULL,
    "type" VARCHAR (50)
);

CREATE TABLE "talent_user" (
	"id" SERIAL PRIMARY KEY,
    "bio" VARCHAR (1000),
    "city" VARCHAR (100),
    "state" VARCHAR (100),
    "zipcode" INTEGER,
    "latitude" DECIMAL,
    "longitude" DECIMAL,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "farm" (
    "id" SERIAL PRIMARY KEY,
    "farm_name" VARCHAR (1000),
    "street_address" VARCHAR (200),
    "city" VARCHAR (100),
    "state" VARCHAR (100),
    "zipcode" INTEGER,
    "phone" VARCHAR,
    "size" VARCHAR,
    "type" VARCHAR (50),
    "bio" VARCHAR (1000),
    "latitude" DECIMAL,
    "longitude" DECIMAL,
    "user_id" INT REFERENCES "user"
);
CREATE TABLE "certification" (
	"id" SERIAL PRIMARY KEY,
    "certification_name" VARCHAR (100),
    "issuing_company" VARCHAR (100),
    "issue_date" DATE,
    "expiration_date" DATE,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "employment" (
	"id" SERIAL PRIMARY KEY,
    "employer_name" VARCHAR (100),
    "title" VARCHAR (100),
    "start_date" DATE,
    "end_date" DATE,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "jobs" (
	"id" SERIAL PRIMARY KEY,
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

CREATE TABLE "proficiencies" (
	"id" SERIAL PRIMARY KEY,
    "proficiency_name" VARCHAR (50),
    "proficiency_category" VARCHAR (100)
);

CREATE TABLE "job_proficiencies" (
	"id" SERIAL PRIMARY KEY,
    "proficiency_id" INTEGER REFERENCES "proficiencies",
    "job_id" INT REFERENCES "jobs"
);

CREATE TABLE "user_proficiencies" (
	"id" SERIAL PRIMARY KEY,
    "proficiency_id" INT REFERENCES "proficiencies",
    "length_experience" VARCHAR (100),
    "user_id" INTEGER REFERENCES "user"
);

CREATE TABLE "education" (
	"id" SERIAL PRIMARY KEY,
    "institution_name" VARCHAR (100),
    "degree" VARCHAR (100),
    "start_date" DATE,
    "end_date" DATE,
    "user_id" INT REFERENCES "user"
);

-- user test data
INSERT INTO "user" ("first_name", "last_name", "email", "password", "type")
VALUES 
('Jack', 'Johnson', 'jack@email.com', 'password', 'talent'),
('Sarah', 'Fischer', 'sarah@email.com', 'password', 'employer'),
('Bill', 'Henderson', 'bill@email.com', 'password', 'talent'),
('Kelly', 'Anderson', 'kelly@email.com', 'password', 'employer');


-- certification test data
INSERT INTO "certification" ("certification_name", "issuing_company", "issue_date", "expiration_date", "user_id")
VALUES 
('Pesticides', 'University of Illinois', '01/02/2016', '01/02/2022', '1'),
('Organic Farming', 'NIFA', '01/02/2016', '01/02/2022', '3');

-- education test data
INSERT INTO "education" ("institution_name", "degree", "start_date", "end_date", "user_id")
VALUES 
('North Dakota State University', 'Agricultural Science', '01/02/2016', '01/02/2020', '1'),
('University of Minnesota Twin Cities', 'Communications', '01/02/2016', '01/02/2020', '3');

-- employment test data
INSERT INTO "employment" ("employer_name", "title", "start_date", "end_date", "user_id")
VALUES 
('Riverside Farms', 'Laborer', '01/02/2019', '01/02/2020', '1'),
('Wolcyn Farm', 'Seasonal Farmer', '01/02/2018', '01/02/2020', '3');


-- farm test data
INSERT INTO "farm" ("farm_name", "street_address", "city", "state", "zipcode", "phone", "size", "type", "bio", "latitude", "longitude", "user_id")
VALUES 
('Gates Farm', '123 Main Street', 'Pella', 'IA', '50219', '123-456-7890', '1-10', 'Row Crop', 'We grow crops!', '41.4080', '92.9164', '2'),
('Johnson Farm', '111 Main Avenue', 'Fargo', 'ND', '58102', '123-456-7890', '25-50', 'Dairy', 'We raise cows!', '46.8772', '96.7898', '4');

-- talent_user test data
INSERT INTO "talent_user" ("bio", "city", "state", "zipcode", "latitude", "longitude", "user_id")
VALUES 
('I tame tigers', 'Shoreview', 'MN', '55126', '45.0791', '93.1472', '1'),
('I enjoy working with cows', 'Minneapolis', 'MN', '55111', '44.9778', '93.2650', '3');

-- proficiencies data
INSERT INTO "proficiencies" ("proficiency_name", "proficiency_category")
VALUES 
('John Deere', 'Brand'),
('Case IH', 'Brand'),
('New Holland', 'Brand'),
('Caterpillar', 'Brand'),
('Massey Fergueson', 'Brand'),
('Claas', 'Brand'),
('Kubota', 'Brand'),
('Alias Chalmers', 'Brand'),
('John Deere Autotrac', 'Precision Farming Technology'),
('Case IH AFS AccuGuide', 'Precision Farming Technology'),
('Ag Leader Steer Command', 'Precision Farming Technology'),
('Raven Precision Products (RS1, SC1, MD)', 'Precision Farming Technology'),
('Trimble Autopilot', 'Precision Farming Technology'),
('New Holland IntelliSteer', 'Precision Farming Technology'),
('Caterpillar Auto-GuideTM', 'Precision Farming Technology'),
('Precision 20/20', 'Precision Farming Technology'),
('Tillage', 'General Agriculture'),
('Planting', 'General Agriculture'),
('Harvesting', 'General Agriculture'),
('Chemical/Fertilizer Application', 'General Agriculture'),
('Tractor', 'Equipment'),
('Front wheel assist tractor', 'Equipment'),
('Four wheel drive tractor', 'Equipment'),
('Chisel', 'Equipment'),
('Disc ripper', 'Equipment'),
('Disc', 'Equipment'),
('Vertical tillage tool', 'Equipment'),
('Field cultivator', 'Equipment'),
('Row crop cultivator', 'Equipment'),
('Grain drill', 'Equipment'),
('Air seeder', 'Equipment'),
('Center fill planter', 'Equipment'),
('Box row planter', 'Equipment'),
('Stip-till machine', 'Equipment'),
('Anhydrous spiker', 'Equipment'),
('Pull behind sprayer', 'Equipment'),
('Self-propelled sprayer', 'Equipment'),
('Self-propelled fertilizer spreader', 'Equipment'),
('Pull cart spreader', 'Equipment'),
('Floater', 'Equipment'),
('Manure spreader', 'Equipment'),
('Liquid manure spreader', 'Equipment'),
('Feed/mixer wagon', 'Equipment'),
('Pull behind silage chopper', 'Equipment'),
('Combine', 'Equipment'),
('Grain cart', 'Equipment'),
('Gravity wagon', 'Equipment'),
('PTO-Augers', 'Equipment'),
('Straight truck', 'Trucking'),
('Semi-truck', 'Trucking');

-- user_proficiencies test data
INSERT INTO "user_proficiencies" ("proficiency_id", "length_experience", "user_id")
VALUES 
('1', '1 year', '1'),
('16', '2 years', '1'),
('3', '1 year', '3'),
('29', '1 year', '3'),
('42', '1 year', '3');


-- jobs test data
INSERT INTO "jobs" ("farm_id", "title", "description", "type", "start_date", "end_date", "housing", "housing_details", "relocation_stipend", "payment_period", "payment_amount")
VALUES 
('1', 'general laborer', 'heavy lifting required', 'row crop', '02/21/21', '02/21/22', 'true', 'guest house', 'true', 'hourly', '24'),
('2', 'truck driver', 'must have clean record', 'row crop', '02/21/21', '06/30/22', 'false', 'none', 'false', 'monthly', '4000');

-- job_proficiences test data
INSERT INTO "job_proficiencies" ("proficiency_id", "job_id")
VALUES 
('3', '1'),
('25', '1'),
('36', '1'),
('1', '2'),
('10', '2'),
('45', '2');



