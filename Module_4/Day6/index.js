const express = require("express");
const app = express();
const UserRouter = require("./routes/users.routes.js");
const TodoRouter = require("./routes/todo.routes.js");

app.use(express.json());         
app.use("/users", UserRouter);  
app.use("/todos", TodoRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
