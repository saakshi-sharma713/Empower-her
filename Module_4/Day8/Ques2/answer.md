# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

A `db.json` file is a **file-based storage system**, not a real database. While it is useful for learning and small demos, it has many limitations for real-world applications.

### Limitations of file-based storage:

* **Performance**:
  Every read or write operation requires reading the entire file into memory and writing it back. As data grows, this becomes very slow.

* **Scalability**:
  File-based storage does not scale well. Handling thousands or millions of records becomes inefficient and impractical.

* **Concurrency**:
  Multiple users accessing or updating the file at the same time can cause data corruption because file systems do not handle concurrent writes safely.

* **Reliability**:
  If the server crashes while writing to the file, data may be lost or corrupted.

* **No advanced features**:
  There is no support for indexing, transactions, relationships, or complex queries.

Because of these issues, `db.json` is only suitable for learning, prototyping, or very small applications.

---

## 2. What are the ideal characteristics of a database system?

A good database system provides much more than just data storage. Some ideal characteristics are:

### Performance

* Databases are optimized for fast read and write operations.
* They use indexing and query optimization to retrieve data efficiently.

### Concurrency

* Multiple users can read and write data at the same time without conflicts.
* Databases use locking and transaction mechanisms to handle concurrent access.

### Reliability

* Data remains safe even if the system crashes.
* Databases support backup and recovery mechanisms.

### Data Integrity

* Ensures data accuracy and consistency.
* Constraints like primary keys, foreign keys, and validations prevent invalid data.

### Scalability

* Can handle growing amounts of data and users.
* Supports vertical scaling (better hardware) and horizontal scaling (multiple servers).

### Fault Tolerance

* The system can continue working even if part of it fails.
* Replication and redundancy help prevent data loss.

---

## 3. How many types of databases are there? What are their use cases?

Broadly, databases can be divided into **two main types**:

### 1. Relational Databases (SQL)

Relational databases store data in **tables** with rows and columns and use **SQL** for querying.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use cases:**

* Banking systems
* E-commerce applications
* School and college management systems
* Applications where data relationships and consistency are important

**Why use them?**

* Strong data integrity
* Structured schema
* ACID compliance

---

### 2. Non-Relational Databases (NoSQL)

Non-relational databases store data in formats like **documents, key-value pairs, graphs, or columns**.

**Examples:** MongoDB, Firebase, Redis, Cassandra

**Use cases:**

* Social media platforms
* Real-time chat applications
* Big data and analytics
* Applications with flexible or changing data structures

**Why use them?**

* High scalability
* Flexible schema
* Better performance for large-scale distributed systems

---

### Conclusion

Relational databases are best when data consistency and relationships are critical, while NoSQL databases are ideal for scalable, high-performance, and flexible applications. Choosing the right database depends on the project requirements.
