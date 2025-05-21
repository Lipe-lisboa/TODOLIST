const bd = require('./connections');

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

async function CreateTarefa (tarefa) { 

    const {title, descrição} = tarefa;
    const sql = 'INSERT INTO tarefas(title,descrição,status,create_at) VALUES(?, ?, ?, ?)'

    const dateUTC = new Date(Date.now()).toUTCString();
    const values = [title, descrição, 'Pendente', dateUTC];

    const create_tarefa = await bd.execute(sql,values);   

    return {insertId: create_tarefa[0].insertId} // retorna o id da nossa nova tarefa
};

async function DeleteTarefa (idTarefa) { 
    const sql = `DELETE FROM tarefas WHERE id = ?`;

    const delete_tarefa = await bd.execute(sql,[idTarefa]);   
    return delete_tarefa;
};


async function UpdateTarefa (id, tarefa) { 

    const {title, descrição, status} = tarefa;
    const sql = 'UPDATE tarefas SET title = ?, descrição = ?, status = ?, WHERE id = ?';
    const values = [title, descrição, status, id];

    const update_tarefa = await bd.execute(sql,values);   

    return update_tarefa[0] // retorna o id da nossa nova tarefa
};



module.exports = {
    getAll,
    CreateTarefa,
    DeleteTarefa,
    UpdateTarefa
};