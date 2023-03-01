const { urlencoded } = require('express');
const express = require('express')

const app = express();

app.use(express.json());
app.use(urlencoded({extended:true}));

//INICIO DAS CONFIGURAÇÕES DO EJS

app.use(express.static('public'));
app.set('view engine', 'ejs');

//FIM DAS CONFIGURAÇÕES DO EJS


//INICIO DAS ROTAS DE ACESSO AS PAGINAS EJS
app.get('/', (req, res)=>{
 res.render('index');
});
//FIM DAS PAGINAS DE ACESSO AS PAGINAS EJJ

app.listen(3002, ()=>{
    console.log("SERVIDOR FRONTEND RODANDO EM - http://localhost:3002")
})