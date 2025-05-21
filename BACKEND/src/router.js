const express = require('express');
const TarefasController = require('./controllers/TarefasController');
const  tarefasMiddlewares = require('./middlewares/tarefasMiddlewares');


const router = express.Router();

router.get('/tarefas', TarefasController.getAll);
router.post('/create_tarefa', tarefasMiddlewares.validarBody,TarefasController.CreateTarefa);
router.delete('/delete_tarefa/:id', TarefasController.DeleteTarefa);
router.put('/update_tarefa/:id', TarefasController.UpdateTarefa) 

module.exports = router;
