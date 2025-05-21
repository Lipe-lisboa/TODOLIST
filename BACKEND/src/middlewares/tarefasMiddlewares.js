

function validarBody(request, response, next) {
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


module.exports = {
    validarBody,
}