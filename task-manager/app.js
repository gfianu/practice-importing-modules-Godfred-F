const path = require('path');
const { addTask, listTasks } = require('./taskManager');
const { saveTasks, loadTasks } = require('./fileHandler');

const filePath = path.join(__dirname, 'tasks.json');

// Load existing tasks
let tasks = loadTasks(filePath);

// Add new tasks
tasks = addTask(tasks, 'Learn Node.js modules');
tasks = addTask(tasks, 'Build a task manager app');

// List all tasks
listTasks(tasks);

// Save the updated task list
saveTasks(filePath, tasks); 
console.log('Tasks have been saved to', filePath);