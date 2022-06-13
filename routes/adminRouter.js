const express = require("express");
const router = express.Router();

const auth = require("../controllers/authController");

router.get("/", auth, (req, res) => {
  if (req.user.admin) {
    res.send("Esses dados somente o admin poderá visualizar");
  } else {
    res.status(401).send("Não é administrador: Acesso negado");
  }
});

router.get("/logged", auth, (req, res) => {
  res.send("Esses dados será visivel somente quem estiver logado");
});

module.exports = router;
