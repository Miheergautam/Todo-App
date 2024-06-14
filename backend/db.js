/* 
TODO{
    title: "string",
    description: "string",
    completed: boolean
}
*/
const mongoose = require("mongoose");

//.env file --->later
mongoose.connect(
  "Enter the Root URL of your MongoDB Database here",
);
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
