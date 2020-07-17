const express = require("express");
const mentors = require('../usecases/mentors');
const router = express.Router();

router.get('/', async (request, response) =>{
    try{
        const result = await mentors.getMentors ();
        response.json({
            success: true,
            data: {
                mentors: result, 
            }
        })

    }catch (error) {

    }
    
})

router.post("/",  async (request, response) => {
    const dataMentor = request.body
    const result = await mentors.createMentor(dataMentor);
    response.json({
        success: true,
        data: result,
    })
});

router.patch("/:id", async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const result = await mentors.updateMentor(id, body)
    response.json({
        success: true,
        data: result,
    })

    
});

router.delete("/:id", async (request, response) => {
    const id = request.params.id;
    await mentors.deleteMentor(id)
    response.json({
        success: true,
    })
});

module.exports = router;
