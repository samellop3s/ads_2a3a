const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('OLA MUNDO DOS DEVS LOKOS DA MENTE !!!');
});
const app = express();
app.use('/', router);
module.exports = app; 
