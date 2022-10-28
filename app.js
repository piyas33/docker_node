const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send("working update");
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
   res.status(err.status || 508).json({
   error: {
      code: err.status || 508,
      message: err.message
   }
});
});

module.exports = app;