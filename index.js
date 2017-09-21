const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes');

const app = express();
let port = process.env.PORT || 8080;

app.disable('x-powered-by');
app.disable('etag');

app.use(cors({allowedHeaders: ['Authorization', 'Content-Type']}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

