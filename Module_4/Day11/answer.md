# Schema Design Fundamentals – Relational Databases

## 1. What is schema design and what does a database schema represent?

Schema design is the process of planning and defining the structure of a database before any data is stored. It involves deciding **what tables are needed**, **what columns each table will have**, **how tables are related**, and **what rules the data must follow**.

A **database schema** represents the logical blueprint of the database. It describes:

* Tables
* Columns and their data types
* Relationships between tables (foreign keys)
* Constraints and validations

For example, in a User–Todo application, the schema defines that a `users` table exists, a `todos` table exists, and each todo belongs to a specific user.

---

## 2. Why schema design is required before writing backend code?

Schema design is required before backend development because the backend logic directly depends on how data is stored.

If the schema is clear:

* APIs can be designed correctly
* Queries become simple and efficient
* Data remains consistent

Without proper schema design:

* Backend code becomes complicated
* Frequent changes are required in APIs
* Bugs occur due to unclear relationships

For example, if you decide later that todos must belong to users, you will need to refactor database tables and backend code, which is costly.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability

Poor schema design can cause serious issues:

### Data Consistency

* Duplicate data appears in multiple tables
* Updates in one place are not reflected elsewhere

### Maintenance

* Queries become complex
* Fixing bugs becomes difficult
* Small changes require changes in many places

### Scalability

* Large tables with unnecessary data slow down performance
* Difficult to add new features or entities

For example, storing user details repeatedly inside an orders table can lead to inconsistent user information.

---

## 4. What are validations in schema design and why databases enforce them?

Validations are **rules applied at the database level** to ensure data correctness.

Common validations include:

* `NOT NULL` – prevents empty values
* `UNIQUE` – prevents duplicate values
* `DEFAULT` – assigns a default value if none is provided
* `PRIMARY KEY` – uniquely identifies each record

Databases enforce validations to:

* Protect data integrity
* Prevent invalid data from being stored
* Reduce dependency on backend-only checks

For example, making an email column `UNIQUE` ensures no two users can register with the same email.

---

## 5. Difference between a database schema and a database table

| Database Schema                             | Database Table            |
| ------------------------------------------- | ------------------------- |
| Overall structure of the database           | Stores actual data        |
| Includes tables, relationships, constraints | Contains rows and columns |
| Logical design                              | Physical data storage     |

A schema defines **how data should be organized**, while a table **holds the data itself**.

---

## 6. Why should a table represent only one entity?

A table should represent only one entity to follow the principle of **normalization**.

Benefits:

* Clear responsibility of each table
* Easy updates and deletions
* Reduced data duplication

For example:

* `users` table → user data
* `orders` table → order data

Mixing multiple entities in one table makes the design confusing and error-prone.

---

## 7. Why redundant or derived data should be avoided in table design?

Redundant data is data that can be calculated or fetched from another table.

Problems with redundant data:

* Data inconsistency
* Extra storage usage
* Complex updates

Example:
Storing `total_price` when it can be derived from `quantity × price` may cause incorrect values if updates are missed.

---

## 8. Importance of choosing correct data types while designing tables

Choosing correct data types ensures:

* Efficient storage
* Faster queries
* Accurate data validation

Examples:

* Use `INTEGER` for age instead of `TEXT`
* Use `BOOLEAN` for true/false values
* Use `TIMESTAMP` for date and time

Incorrect data types can lead to incorrect data, slower performance, and complex query logic.

---

## Conclusion

Schema design is a foundational step in building reliable and scalable applications. A well-designed schema ensures data consistency, simplifies backend development, and allows the application to grow efficiently over time.
