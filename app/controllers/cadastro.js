module.exports.cadastro = function(app, req, res) {
    var dadosForm = req.body;

    res.render('cadastro', { validacao: {}, dadosForm: dadosForm });
}

module.exports.cadastrar = function(app, req, res) {
    var dadosForm = req.body;

    req.assert('usuario', 'Usuario não pode ser vazio.').notEmpty();
    req.assert('casa', 'Casa não pode ser vazia.').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia.').notEmpty();
    req.assert('nome', 'Nome não pode ser vazio.').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', { validacao: erros, dadosForm: dadosForm });
        return;
    }

    var connection = app.config.dbConnection;


    var UsuariosDAO = new app.app.models.UsuariosDAO(connection);
    var JogoDAO = new app.app.models.JogoDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);
    JogoDAO.gerarParametros(dadosForm.usuario);

    res.render('index', { sucesso: [{ msg: "Cadastro feito com sucesso." }], validacao: {},  dadosForm : {}  });
}