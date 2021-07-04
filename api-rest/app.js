const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const mongoose = require("mongoose");

const tareasRoutes = require('./routes/tareas');

mongoose.connect('mongodb+srv://admin:'
+ encodeURIComponent(process.env.MONGO_ATLAS_PW) +
'@cluster0.dj9ya.mongodb.net/apiSkylabDatabase?retryWrites=true&w=majority')

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use('/tareas', tareasRoutes)

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app