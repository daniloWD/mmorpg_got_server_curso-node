module.exports.index = function(app, req, res) {

    res.render('index', { validacao: {}, sucesso: {}, dadosForm : {}  });
}

module.exports.autenticar = function(app, req, res) {

    var dadosForm = req.body;

    req.assert('usuario', 'Usuario não pode ser vazio.').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia.').notEmpty();

    var erros = req.validationErrors();
    if (erros) {
        res.render("index", { validacao: erros, sucesso: {}, dadosForm : dadosForm  });

        return;
    }

    var connection = app.config.dbConnection;

    var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm, req, res);

    // res.send("Tudo ok para criar a sessão");

}