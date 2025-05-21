const tarefasModel = require('../model/tarefasModel');

async function getAll(request, response) {
    const tarefas = await tarefasModel.getAll();
    return response.status(200).json({tarefas}); 
}

async function CreateTarefa(request, response) {
    const create_tarefa = await tarefasModel.CreateTarefa(request.body);
    return response.status(201).json(create_tarefa); 
}

async function DeleteTarefa (request, response) { 

    const { id } = request.params;

    await tarefasModel.DeleteTarefa(id);   
    return response.status(204).json();
};

async function UpdateTarefa(request, response) {
    const { id } = request.params;
    await tarefasModel.UpdateTarefa(id, request.body);
    return response.status(204).json(); 
}

module.exports = {
    getAll,
    CreateTarefa,
    DeleteTarefa,
    UpdateTarefa
};