Database Relationships
1. Definition of Database Relationship

A database relationship shows how tables in a database are connected to each other.

Relationships are created using:

Primary Key (PK) – uniquely identifies a record

Foreign Key (FK) – refers to the primary key of another table

Relationships help to:

Reduce data duplication

Keep data organized

Maintain data accuracy

2. Types of Database Relationships

There are three main types of database relationships:

One-to-One (1:1)

One-to-Many (1:N)

Many-to-Many (M:N)

3. One-to-One Relationship (1:1)
Definition

In a one-to-one relationship, one record in a table is related to only one record in another table.

E-Commerce Example

User and User Profile

One user has one profile

One profile belongs to one user

Example Tables

Users

UserProfiles

4. One-to-Many Relationship (1:N)
Definition

In a one-to-many relationship, one record in a table can be related to many records in another table.

E-Commerce Example

Customer and Orders

One customer can place many orders

Each order belongs to only one customer

Example Tables

Customers

Orders

5. Many-to-Many Relationship (M:N)
Definition

In a many-to-many relationship, many records in one table are related to many records in another table.

This relationship uses a junction table.

E-Commerce Example

Orders and Products

One order can have many products

One product can be in many orders

Example Tables

Orders

Products

OrderItems (junction table)

6. Summary
Relationship Type	E-Commerce Example
One-to-One	User ↔ Profile
One-to-Many	Customer ↔ Orders
Many-to-Many	Orders ↔ Products


7. Conclusion

Database relationships are very important in database design.
In an e-commerce application:

One-to-One is used for user details

One-to-Many is used for customers and orders

Many-to-Many is used for orders and products

Good relationships make the database efficient and reliable.

