const express = require('express');

const router = express.Router();
router.get('/',(req,res)=>{
    //res.send('Olá turma de ADS de SMP da manhã!!');
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('Olá ' + nome + ' voce tem ' + idade + ' anos de idade');
});

router.get('/sobre',(req,res)=>{
    res.send('Página sobre do projeto');
});

module.exports = router;