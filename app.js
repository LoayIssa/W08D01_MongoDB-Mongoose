const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());
/*________________________ */

app.post("/create/todo", (req, res) => {
  const {task , description , deadline , isCompleted , priority } = req.body;
  const todo = new todoModel (

    {task , description , deadline , isCompleted , priority }

  )

 todo.save().then(result=>{res.json(result)}).catch(err=>{res.send(err)})

});

/*________________________ */

app.get("/todos/complete", (req, res) => {
  todoModel.find({isCompleted:true}).then((result)=>{
      res.status(200)
      res.json(result);
  }).catch((err)=>{res.json(err)})

});

/*________________________ */


app.get("/todos", (req, res) => {
    todoModel.find().then((result)=>{
        res.json(result);
    }).catch((err)=>{res.json(err)})

});

/*________________________ */
app.put("/update/todo/:task", (req, res) => {
  const Utask = req.params.task
  const { task, description, deadline, isCompleted, priority } = req.body;

  todoModel.findOneAndUpdate({task:Utask}, { task, description, deadline, isCompleted, priority }).then((result)=>{
      res.status(200)
      res.json(result)
  }).catch((err)=>{res.json(err)})
    
});

/*________________________ */
app.delete("/delete/todo/:task", (req, res) => {
  const Utask = req.params.task
  todoModel.findOneAndDelete({task:Utask}).then((result)=>{
      res.status(200);
      res.json(result);
  }).catch((err)=>{res.json(err)})
});





 


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});