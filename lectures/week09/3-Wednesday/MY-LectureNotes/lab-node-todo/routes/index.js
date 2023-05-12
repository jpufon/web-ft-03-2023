const express = require("express");
const router = express.Router();
const db = require('../models/database')
// router.get("/", (req, res) => {
//   res.render("index");
// });


//! test endpoints using thunder client before messing with frontend

router.get('/', async (req, res) => {

  try{

      let records = await db.query('SELECT * FROM my_table'); //[{}, {}, {}]
    console.log(records);
      res.render('index', {
          categories: records
      })
      // res.json(records)
  }
  catch{

      res.render('index', {
          categories: []
      })
  }
})

// GET /todos, displays all of the todos
router.get('/todos', async (req, res) => {

  try{

      let records = await db.query('SELECT * FROM my_table'); //[{}, {}, {}]
    console.log(records);
      res.render('index', {
          categories: records
      })
      // res.json(records)
  }
  catch{

      res.render('index', {
          categories: []
      })
  }
})

// GET /todos/:id , displays todos by id


router.get('/todos/:id', async (req, res) => {

  try{
    let {id} = req.params;

      let records = await db.query('SELECT * FROM my_table WHERE id = $1', [id]); //[{}, {}, {}]

      // res.render('index', {
      //     categories: records
      // })
      res.json(records)
  }
  catch{

      res.render('index', {
          categories: ""
      })
  }
})

// POST /todos, creates a new todo

router.post('/todos', async (req, res) => {
  try {
    console.log("I am here");
    let { description } = req.body;

    let todoItems = await db.query('INSERT INTO my_table VALUES (DEFAULT, $1)', [description]);

    console.log('Todo item added:', description);

    let newTable = await db.query('SELECT * FROM my_table');
    // res.json(newTable);

    res.render('index', {
      categories: newTable
    })
    
  } catch (error) {
    console.error('Error adding todo item:', error);
    res.status(500).send('Internal Server Error');
  }
});










// PUT /todos/:id, update a todo item

router.put('/todos/:id', async (req, res) => {
  try {
    const todoId = req.params.id;
    const { description } = req.body;

    // Validate and sanitize the input data (e.g., using a validation library)

    // Perform the database operation to update the todo
    const result = await db.query('UPDATE my_table SET description = $1 WHERE id = $2 RETURNING *', [description, todoId]);
    res.json(result)
    // Check if any rows were affected by the update
    // if (result.rowCount === 0) {
    //   return res.status(404).json({ success: false, error: 'Todo not found' });
    // }

    // Retrieve the updated todo from the result
    // const updatedTodo = result.rows[0];

    // Send a success response with the updated todo
    // res.json({ success: true, data: updatedTodo });
  } catch (error) {
    // Handle any errors and send an error response
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});




// DELETE /todos/:id, delete a todo

router.delete('/todos/:id', async (req, res) => {
  try {
    const todoId = req.params.id;

    // Perform the database operation to delete the todo
    const result = await db.query('DELETE FROM my_table WHERE id = $1', [todoId]);
    // res.json(result)
    // Check if a row was affected by the delete operation
    if (result.rowCount === 0) {
      // If no rows were affected, it means the todo doesn't exist
      return res.status(404).json({ success: false, error: 'Todo not found' });
    }

    // Send a success response
    res.json({ success: true });
  } catch (error) {
    // Handle any errors and send an error response
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});


module.exports = router;
