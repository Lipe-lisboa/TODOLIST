// essas funções tem como objetivo "ficarem no meio do caminho" para caso ocorra algum
// erro, não trave a API

function validarFieldTitle(request, response, next) {
    const dados = request.body;

    if (dados.title === undefined){
        return response.status(400).json({mensagem: 'the field "title" is required'});
    }

    if (dados.title === ''){
        return response.status(400).json({mensagem: 'the field "title" can not be null'});
    }

    else{
        next();
    }

};

function validarFieldStatus(request, response, next) {
    const dados = request.body;

    if (dados.status === undefined){
        return response.status(400).json({mensagem: 'the field "status" is required'});
    }

    if (dados.status === ''){
        return response.status(400).json({mensagem: 'the field "status" can not be null'});
    }

    else{
        next();
    }

};

// Exprota os middlewares para as rotas
module.exports = {
    validarFieldTitle,
    validarFieldStatus
}