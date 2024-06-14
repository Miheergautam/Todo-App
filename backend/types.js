const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo,
  updateTodo,
};

/* 
        1st:
{
    "title": "string"
    "description": "string"
}

2nd: all the todos

        3rd: 
{
    "id": "string"
}
*/
