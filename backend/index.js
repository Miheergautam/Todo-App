//write basic express boilerplate code,
// with express.json() middleware

const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      error: "You sent the wrong inputs !",
    });
    return;
  }
  // else put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    alert: "Todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      error: "You sent the wrong inputs !",
    });
    return;
  }
  // else put it in mongodb

  await todo.updateOne(
    {
      _id: updatePayload.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    alert: "Todo updated successfully",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
