const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");
router.get("/", controller.set);
router.post("/nuevo-usuario", controller.postEnviar);
router.get("/editar-usuario/:id", controller.editar);
router.get("/elimar-usuario/:id", controller.delete);
module.exports = router;
