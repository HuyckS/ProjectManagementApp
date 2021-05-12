const MessageController = require('../controllers/message.controller');

module.exports = app => {
    app.get('/api/messages', MessageController.findAllMessages);
    app.get('/api/messages/:id', MessageController.findOneMessage);
    app.put('/api/messages/:id', MessageController.updateExistingMessage);
    app.post('/api/messages', MessageController.createNewMessage);
    app.delete('/api/messages/:id', MessageController.deleteAnExistingMessage);
}