const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require("./routes/routes");
const envs = require("./config/envs");
const cors = require("cors");
const app = express();


let corsOptions = {
  origin: envs.server.origins_allowed
}

const port = process.env.PORT || '8080'; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions))
app.use(routes)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

module.exports = app;
