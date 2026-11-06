const express = require('express');
const mongoose = require('mongoose');
const Task = require('./model/task');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post('/task/create', async (req, res) => {
  const data = req.body;

  //validation

  const newTask = await Task.create({
    title: data.title,
    content: data.content,
  });

  if (!newTask) {
    return res.status(500).json({
      message: 'Failed To create Task',
    });
  }

  res.status(200).json({
    message: 'task creation successful',
  });
});

app.get('/task/all', async (req, res) => {
  const allTask = await Task.find({});
  if (!allTask || allTask.length == 0) {
    return res.status(400).json({
      message: 'NO DATA FOUND',
      data: [],
    });
  }
  res.status(200).json({
    message: 'Data Fetch Succesful',
    data: allTask,
  });
});

app.get('/task/:id', async (req, res) => {
  const taskId = req.params.id;
  const taskById = await Task.findById(taskId);
  if (!taskById || taskById.length == 0) {
    return res.status(400).json({
      message: 'Task Not Exist',
    });
  }
  res.status(200).json({
    data: taskById,
  });
});

app.get('task/search', async (req, res) => {
  const searchTerm = req.query.title;
  const tasks = await Task.find({
    title: {
      $regex: searchTerm,
      $options: 'i',
    },
  });

  if (!tasks) {
    return res.status(400).json({
      message: 'NO TASK Found',
    });
  }

  res.status(200).json({
    data: task,
  });
});

//update
app.put('/task/:id', async (req, res) => {
  const taskId = req.params.id;
  const data = req.body;

  const updateData = {};

  if (data.title) {
    updateData.title = title;
  }
  if (data.content) {
    updateData.content = content;
  }

  const updateTask = await Task.findByIdAndUpdate(taskId, updateData);

  if (!updateTask) {
    return res.status(500).json({
      message: 'Failed To Update Task',
    });
  }

  res.status(200).json({
    message: 'Task Update Succesfull',
  });
});

app.delete('task/:id', async (req, res) => {
  const taskId = req.params.id;

  const deletedTask = await Task.findByIdAndDelete(taskId);

  if (!deletedTask) {
    return res.status(500).json({
      message: 'Task Deletion Failed, Please Try Again',
    });
  }
  res.status(200).json({
    message: 'Task Deletion Successful',
  });
});
const PORT = 5000;

const MONGO_URL =
  'mongodb+srv://sharma312006:721101@AbL@abhishek.fohw4la.mongodb.net/';

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('MONGO DB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
  });
