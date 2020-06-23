var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
<<<<<<< HEAD
// var loginRouter = require("./routes/userLogin")
var methodOverride = require("method-override");
=======
var loginRouter = require("./routes/users");

// Metodo para implementar PUT y DELETE
var methodOverride =  require('method-override');
>>>>>>> a56f939abe2f3552bc6ed51367e1c39f4abb9fc8

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

// todo lo que llegue a traves de un form lo captura como obj literal y convierte a Json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
<<<<<<< HEAD
app.use(methodOverride("_method"));
=======

// Metodo para implementar PUT y DELETE
app.use(methodOverride('_method'))
>>>>>>> a56f939abe2f3552bc6ed51367e1c39f4abb9fc8
// app.use(session({ secret: "SecretBeauty" }));

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/register", loginRouter);

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
