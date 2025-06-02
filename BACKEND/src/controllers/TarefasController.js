// esse arquivo vai ter todas as requisições da API

// aqui nós não teremos contato direto ao banco de dados, portanto, não iremos
// execultar requisições SQL, os models são os responsaveis por isso.

const tarefasModel = require('../model/tarefasModel');

// Retorna todas as tarefas que foram criadas e estão agrupadas em um json
async function getAll(request, response) {
    const tarefas = await tarefasModel.getAll();
    return response.status(200).json({tarefas}); 
}

 
// Cria uma nova tarefa com as informações que o usuario enviou no body
async function CreateTarefa(request, response) {
    const create_tarefa = await tarefasModel.CreateTarefa(request.body);
    return response.status(201).json(create_tarefa); 
}


// Deleta a tarefa com o id enviado pelo o usuario
async function DeleteTarefa (request, response) { 

    const { id } = request.params;

    await tarefasModel.DeleteTarefa(id);   
    return response.status(204).json();
};


// atualiza a tarefa com o id enviado pelo o usuario
async function UpdateTarefa(request, response) {
    const { id } = request.params;
    const tarefa_atualizada = await tarefasModel.UpdateTarefa(id, request.body);
    return response.status(204).json({tarefa_atualizada}); 
}


// exporta as funções para serem usadas no router
module.exports = {
    getAll,
    CreateTarefa,
    DeleteTarefa,
    UpdateTarefa
};