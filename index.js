const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes');

const app = express();
let port = process.env.PORT || 8080;

// Cleanup
app.disable('x-powered-by');
app.disable('etag');

// Cors
app.use(cors({allowedHeaders: ['Authorization', 'Content-Type']}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.use('/', routes);

// Basic 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.errors[0].messages[0]);
  }

  // eslint-disable-next-line no-console
  if (res.headersSent) {
    console.error('failed view step with', err.viewErr, err.stack);
  } else {
    console.error(err.stack);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
