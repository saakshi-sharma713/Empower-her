Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users see and interact with directly in the browser.

1. User Interface (UI)

Frontend is responsible for designing and displaying the website layout.

It includes buttons, forms, text, images, menus, and colors.

Technologies used: HTML, CSS, JavaScript, React, Angular, Vue.

2. User Interaction

Handles user actions like clicking buttons, filling forms, scrolling, and navigation.

Validates user input before sending data to the backend.

Provides instant feedback (loading spinners, error messages, alerts).

3. Communication with Backend

Sends requests to the backend using HTTP/HTTPS.

Receives data in formats like JSON.

Uses APIs to fetch, update, or delete data.

Example:
A login form where the frontend sends the username and password to the backend for verification.

Q2. Role of Backend (BE)

The Backend (BE) is the server-side part of a web application that handles logic, data, and security.

1. Server-Side Processing

Processes requests sent by the frontend.

Applies rules and conditions (business logic).

Generates responses to send back to the frontend.

2. Database Handling

Stores, retrieves, updates, and deletes data.

Works with databases like MySQL, MongoDB, PostgreSQL.

Ensures data consistency and reliability.

3. Security and Authentication

Manages user authentication (login, logout).

Protects data using encryption and authorization.

Prevents unauthorized access and attacks.

Example:
Checking if a user’s login credentials are correct before allowing access.

Q3. Business Logic
Definition

Business Logic refers to the rules and conditions that control how a web application works according to business requirements.

It decides:

What actions are allowed

When they are allowed

How data should be processed

Real-World Examples

E-Commerce Website

Apply discount only if the cart value is above ₹1000.

Prevent ordering if the product is out of stock.

Banking Application

Allow withdrawal only if balance is sufficient.

Charge penalty if minimum balance is not maintained.

Online Exam System

Automatically submit the exam when time ends.

Do not allow multiple attempts if only one is permitted.

Q4. Client–Server Model
Definition

The Client–Server Model is a system where the client requests services and the server provides them.

1. Client

The user’s device or browser.

Sends requests to the server.

Examples: Web browser, mobile app.

2. Server

A machine or program that processes requests.

Stores data and applies business logic.

Sends responses back to the client.

3. Communication Process

Client sends a request (HTTP request).

Server processes the request.

Server sends a response (data or result).

Example:
Opening a website → browser requests data → server sends webpage.

Q5. Three-Tier Architecture
Definition

3-Tier Architecture divides a web application into three separate layers for better management and scalability.

1. Presentation Layer

User interface layer.

Displays data to the user.

Technologies: HTML, CSS, JavaScript, React.

2. Application (Business) Layer

Contains business logic.

Processes requests and makes decisions.

Technologies: Node.js, Java, Python, .NET.

3. Data Layer

Manages data storage.

Interacts with databases.

Technologies: MySQL, MongoDB, PostgreSQL.

Why This Architecture Is Used

Easy maintenance

Better security

Scalability

Clear separation of responsibilities

Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language mainly because of Node.js.

1. Performance

Uses non-blocking, asynchronous operations.

Handles multiple requests efficiently.

Suitable for real-time applications.

2. Ecosystem

Large number of libraries and packages (npm).

Strong community support.

Easy integration with frontend JavaScript.

3. Popular Backend Frameworks

Node.js – Runtime environment

Express.js – Lightweight framework


Example:
Using Node.js and Express to create REST APIs for a web application.