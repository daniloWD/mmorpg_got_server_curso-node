module.exports.cadastro = function(app, req, res) {
    var dadosForm = req.body;

    res.render('cadastro', { validacao: {}, dadosForm: dadosForm });
}

module.exports.cadastrar = function(app, req, res) {
    var dadosForm = req.body;

    req.assert('usuario', 'Usuario não pode ser vazio.').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio.').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio.').notEmpty();
    req.assert('nome', 'Nome não pode ser vazio.').notEmpty();

    var erros = req.validationErrors();
    console.log(erros);
    if (erros) {
        res.render('cadastro', { validacao: erros, dadosForm: dadosForm });
        return;
    }

    var connection = app.config.dbConnection;
    console.log(connection);

    var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);

    res.send('Podemos cadastrar');
}