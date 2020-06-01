const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo_controllers");
router.use((req, res, next) => {
  if (req.user) {
    next();
  }
  else {
    res.redirect("/");
  }
})
router.route("/")
  .get(async(req, res) => {
    tasks=await todoController.getUserTasks(req)
    res.render("todos", {
      users: {
        name: "User Tasks",
        tasks: tasks
      }
    })
  })
router.route("/add")
  .get((req, res) => {
    res.render("add_todo", {
    })
  })
  .post((req,res)=>{
    data=todoController.addTask(req,res);
    if(data){
      res.redirect("/todo")
    }
  })

  router.route("/:_id")
  .all((req, res, next) => {
    todoController.getSingleTask(req, res, next);
  })
  .get((req, res) => {
    task=todoController.getTask(req)
    console.log(task)
    res.render("single_todo", {
      task: task
    });
  });
module.exports = router;