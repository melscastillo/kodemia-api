const express = require("express");

const koders = require('../usecases/koders');

const router = express.Router();

router.get("/",async (request, response) => {
    try {
        const result = await koders.getKoders();
    response.json({
        succes: true,
        data: {
            koders: result,
        }
    });

    } catch (error){
        response.status (400).json({
            success: false,
            error: error.message
        })
    }
    });

router.post("/",  async (request, response) => {
    const dataKoder = request.body
    const result = await koders.createKoder(dataKoder);
    response.json({
        success: true,
        data: result,
    })
});

router.patch("/:id", async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const result = await koders.updateKoder(id, body)
    response.json({
        success: true,
        data: result,
    })

    
});

router.delete("/:id", async (request, response) => {
    const id = request.params.id;
    await koders.deleteKoder(id)
    response.json({
        success: true,
    })
});

module.exports = router;
