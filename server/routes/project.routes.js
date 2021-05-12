const ProjectController = require("../controllers/project.controller");

module.exports = (app) => {
    app.get('/api/projects', ProjectController.findAllProjects);
    app.get('/api/projects/:id', ProjectController.findOneProject);
    app.put('/api/projects/:id', ProjectController.updateExistingProject);
    app.post('/api/projects', ProjectController.createNewProject);
    app.delete('/api/projects/:id', ProjectController.deleteAnExistingProject);
}