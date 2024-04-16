const express = require('express');

const router = express.Router();
router.get('/json',(req,res)=>{
    //res.send('Olá turma de ADS de SMP da manhã!!');
    let nome = req.query.nome;
    let sobrenome= req.query.sobrenome;
    res.json({
        nomeCompleto: nome + ' ' + sobrenome
    });
});
router.get('/json',(req,res)=>{
   res.json(req.query);
});

router.get('/sobre',(req,res)=>{
    res.send('Página sobre do projeto');
});

router.get('/posts/:id',(req,res)=>{
    let id = req.params.id;
    res.send('ID do post' + id);
});

module.exports = router;