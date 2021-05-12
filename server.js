// require statements and imports at the top
const express = require('express');
const cors = require('cors');

const PORT = 8080;

// create my express app
const app = express();


// configure middleware and settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// routes
require("./server/config/mongoose.config");
require("./server/routes/project.routes")(app);
require("./server/routes/user.routes")(app);
require("./server/routes/message.routes")(app);
require("./server/routes/task.routes")(app);


// listen statement
app.listen(PORT, () => {
    console.log("Tuning into project management app");
})