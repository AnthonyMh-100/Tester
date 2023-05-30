const {Router} = require('express');

const router = Router();

const movies  = require('../sample.json');


router.get('/',(req,res)=>{

    const id = req.params.id;
    res.json(movies);
})

router.get('/:id',(req,res)=>{

    const id = req.params.id;
    console.log(id)
    res.send(movies);
})

router.post('/',(req,res)=>{
 const {titulo,director,año,rating} = req.body;
     if (titulo && director && año && rating) {
          
        const id = movies.length + 1 ;
        const newMovie = {...req.body,id};

        movies.push(newMovie);
        res.json(movies);

       
     }else{
        res.json({error:'error de peticion'});
     }
    res.send('recibido')
});

// router.delete('/:id',(req,res)=>{

//     const id =  req.params.id;


// })



module.exports = router;
