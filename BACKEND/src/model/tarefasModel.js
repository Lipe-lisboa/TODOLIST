// Execulta as comandos sql


const bd = require('./connections');

// Pega as tarefas que estão no banco de dados 
async function getAll () { 

    // await faz com que o codigo 'espre' todo dado do bd para só ai retornar a variavel
    // await só é possivel em funções assincrona (async)
    // Uma função assíncrona em programação, especialmente em JavaScript, 
    // é uma função que tem a capacidade de pausar sua execução enquanto espera 
    // por uma operação que leva tempo para ser concluída, sem bloquear o fluxo principal
    //  do programa. Isso permite que outras tarefas continuem sendo executadas durante
    //  esse período de espera.
    const tarefas = await bd.execute('SELECT * FROM tarefas');
    return tarefas[0]
};


// Cria uma nova tarefa e coloca no banco de dados
async function CreateTarefa (tarefa) { 

    const {title, descrição} = tarefa;

    // código sql
    const sql = 'INSERT INTO tarefas(title,descrição,status,create_at) VALUES(?, ?, ?, ?)'

    // Pega a data de agora que esta no meu PC
    const dateUTC = new Date(Date.now()).toUTCString();
    const values = [title, descrição, 'Pendente', dateUTC];

    const create_tarefa = await bd.execute(sql,values);   

    return {insertId: create_tarefa[0].insertId} // retorna o id da nossa nova tarefa
};


// Deleta a tarefa
async function DeleteTarefa (idTarefa) { 
    const sql = `DELETE FROM tarefas WHERE id = ?`;

    const delete_tarefa = await bd.execute(sql,[idTarefa]);   
    return delete_tarefa;
};


// Atualiza a tarefa
async function UpdateTarefa (id, tarefa) { 

    let title;
    let descrição;
    let status;


    if (Object.keys(tarefa).length === 2){
        title = tarefa[0];
        status = tarefa[1];
    }
    if (Object.keys(tarefa).length === 3){
        title = tarefa[0];
        descrição = tarefa[1];
        status = tarefa[2];
    }

    const sql = 'UPDATE tarefas SET title = ?, descrição = ?, status = ? WHERE id = ?';
    

    let values  = ''
    if (descrição === undefined || descrição === '') {
        values = [title, status, id];
    }

    else {
        values = [title, descrição, status, id];
    }

    const update_tarefa = await bd.execute(sql,values);   

    return update_tarefa[0] // retorna o id da nossa nova tarefa
};


// Exporta os models para o TarefasController
module.exports = {
    getAll,
    CreateTarefa,
    DeleteTarefa,
    UpdateTarefa
};