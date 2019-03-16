const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

/* express app */
const app = express();
const port = process.env.PORT||8080;



/* app configuration*/
//cros origin
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const routes = require('./router/router');

app.use('/api',routes);

app.listen(port,()=>console.log(`server is listening at ${port}`));