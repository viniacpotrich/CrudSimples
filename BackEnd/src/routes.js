const express = require('express');
const routes = express.Router(); 

const cursedPersonController = require('./controller/cursedPersonController');

routes.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

routes.get('/cursedPerson', cursedPersonController.getAll)
routes.post('/cursedPerson', cursedPersonController.create)
routes.get('/cursedPerson/:_id', cursedPersonController.getOne)
routes.delete('/cursedPerson/:_id', cursedPersonController.delete)
routes.patch('/cursedPerson/:_id', cursedPersonController.update)

routes.get('/', function(req,res){
    res.status(200).json({message: "Teste de Raiz, mensgagem de rota"})
})

module.exports = routes