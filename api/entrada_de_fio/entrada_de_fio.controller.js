const express = require("express");
const router = express.Router();

const entrada_de_fio = require("./entrada_de_fio.handler");

router.get("/", async (req, res) => {
    res.json(await entrada_de_fio.buscarEntradas_De_Fios());
});

router.get("/:id", async (req, res) => {
    res.json(await entrada_de_fio.buscarEntrada_De_Fio(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await entrada_de_fio.criarEntrada_De_Fio(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await entrada_de_fio.atualizarEntrada_De_Fio(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await entrada_de_fio.deletarEntrada_De_Fio(req.params.id));
});

module.exports = router