// Esse arquivo contera todas as rotas da API

// Importa a biblioteca express
const express = require('express');

// importa as requisições da API
const TarefasController = require('./controllers/TarefasController');

// Importa os middlewares ("funções de verificação")
const  tarefasMiddlewares = require('./middlewares/tarefasMiddlewares');

// Cria um router pegando da bliblioteca express a função Router
const router = express.Router();


// Todas as rotas
router.get('/tarefas', TarefasController.getAll);
router.post('/create_tarefa', tarefasMiddlewares.validarFieldTitle,TarefasController.CreateTarefa);
router.delete('/delete_tarefa/:id', TarefasController.DeleteTarefa);
router.put(
    '/update_tarefa/:id',
    tarefasMiddlewares.validarFieldTitle,
    tarefasMiddlewares.validarFieldStatus,
    TarefasController.UpdateTarefa
) 


// exporta as rotas para ser importadas no nosso app
module.exports = router;
