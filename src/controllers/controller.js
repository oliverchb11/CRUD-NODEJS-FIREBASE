const controller = {};
const db = require("../db/db-firebase");
// metodo get para listar los daros de la base de datos
controller.set = (req, res) => {
  //manera de consultar datos en fire base
  db.ref("contactos").once("value", (snapshot) => {
    const data = snapshot.val();
    res.render("index", {
      contactos: data,
    });
  });
};
// metodo post que guarda los datos a la base de datos fire base
controller.postEnviar = (req, res) => {
  const NuevoContacto = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    numero: req.body.numero,
  };
  db.ref("contactos").push(NuevoContacto);
  res.redirect("/");
};
// metodo get que me quema los datos en el formulario
controller.editar = (req, res) => {
  const { id } = req.params;

  db.ref("contactos/" + id).once("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    res.render("index-edit", {
      contactos: data[0],
    });
  });
};

//Eliminar metodo  get que elimina los datos
controller.delete = (req, res) => {
  const { id } = req.params;
  db.ref("contactos/" + id).remove();
  res.redirect("/");
};

module.exports = controller;
