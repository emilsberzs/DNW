# Basic Database operations- providing access to database from middleware, part 2.
## Primary keys
- PRIMARY KEY
    - A field or combination of fields that **uniquely** identify each row or record.
    - Provides unique identifier for a record.
    - Guaranteed that every row is unique
    - Integer ID field set to AUTO_INCREMENT frequently used as PK
        - id INT AUTO_INCREMENT
    - Integrity constraints in DB design:
        - Rules, eg limiting acceptable values and actions
        - Purpose: to provide accuracy and integrity of data in databases.
    - PK integrity constraints
        - Every table must have a field (or combination of fields) designated as its primary key.
        - Essentially as if UNIQUE and NOT NULL constraints applied

## Providing access to a database from middleware (Node.js)
- Lab 15

## Passing database data to EJS template
- Lab 16 

## Inserting data from Node into database
- Lab 17

## Database Search from Node
- Lab 18