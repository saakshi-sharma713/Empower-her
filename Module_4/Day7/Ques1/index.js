const express = require("express");
const app = express();

const loggerMiddleware = require("./Middleware/logger.middleware.js");
const todoRouter = require("./Router/Todo.routes.js");

app.use(express.json());


app.use(loggerMiddleware);


app.use("/todos", todoRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
