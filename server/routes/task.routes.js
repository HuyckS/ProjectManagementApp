const TaskController = require('../controllers/task.controller');

module.exports = app => {
    app.get('/api/tasks', TaskController.findAllTasks);
    app.get('/api/tasks/:id', TaskController.findOneTask);
    app.put('/api/tasks/:id', TaskController.updateExistingTask);
    app.post('/api/tasks', TaskController.createNewTask);
    app.delete('/api/tasks/:id', TaskController.deleteAnExistingTask);
}