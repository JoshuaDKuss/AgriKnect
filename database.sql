CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "username" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR (150) NOT NULL,
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
    "user_id" INT,
    "title" VARCHAR (100),
    "description" VARCHAR (100),
    "type" VARCHAR (100),
    "start_date" DATE,
    "end_date" DATE,
    "housing" VARCHAR(50),
    "housing_details" VARCHAR (100),
    "relocation_stipend" VARCHAR(50),
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
    "job_id" INT 
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
('Semi-truck', 'Trucking'),
('Construction', 'Maintenance and Mechanics'),
('Auto/machinery repairs', 'Maintenance and Mechanics'),
('Plumbing', 'Maintenance and Mechanics'),
('Electrical', 'Maintenance and Mechanics');







