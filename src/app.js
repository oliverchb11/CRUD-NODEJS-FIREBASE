const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const router = require("./routers/rutas");
//settigns
//puerto
app.set("port", process.env.PORT || 3000);
//configurando vistas
app.set("views", path.join(__dirname, "views"));

//engine configura el motor de plantilla
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
//middlewares resivir por consola las peticiones del servidor
app.use(morgan("dev"));
//aceptar los datos que vienen desde un formulario
app.use(express.urlencoded({ extended: false }));
//rutas
app.use("/", router);
//static files
app.use(express.static(path.join(__dirname, "public")));
module.exports = app;
