var createError = require("http-errors");
var express = require("express");
var app = express();
var path = require("path");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var loginRouter = require("./routes/users");

// rutas apis
var productsApiRouter = require('./routes/api/products')
// var usersApiRouter = require('./routes/api/users')

// Metodo para implementar PUT y DELETE
var methodOverride = require("method-override");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var auth = require("./middlewares/auth");

app.use(logger("dev"));

// view engine setup
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

// Session y cookies
app.use(cookieParser());
app.use(
  session({
    secret: "SecretBeauty",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(auth);

// Rutas
app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/users", loginRouter);

// rutas api
app.use('/api/products', productsApiRouter);
// app.use('/api/users', usersApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
