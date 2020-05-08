const app = require("./app");

///servidor corriendo en el puerto 3000
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto", app.get("port"));
});
