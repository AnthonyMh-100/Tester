//routs

//requierendo el modulo router para exportar a otras carpetas


const {Router} = require('express');

const router = Router();

router.get('/test',(req,res)=>{

    const data={
        "name":"fatz",
        "website" :"fatzswweb.com"
    }


    res.json(data);
})

module.exports = router;