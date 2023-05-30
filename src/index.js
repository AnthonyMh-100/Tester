const express = require('express');

const app = express();

const morgan = require('morgan');

//Setting

app.set('json spaces',2); // solo para ordenar los formatos json en la pagina web -- solo uso como prueba

app.set('port',process.env.PORT || 3000);

//middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

//routs

app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

// app.get('/',(req,res)=>{
//     res.send({"tile":"hello world!"});
// })


app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
})