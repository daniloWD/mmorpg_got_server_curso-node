module.exports.jogo = function(app, req, res) {
    if (req.session.autorizado !== true) {
        res.render('index', { validacao: [{ msg: "Usuário precisa fazer login" }], sucesso: {}, dadosForm : {}  });
        return;

    } else {

        var msg = '';
        if (req.query.msg != '') {
            msg = req.query.msg;
        }


        var usuario = req.session.usuario;
        var casa = req.session.casa;
        var connection = app.config.dbConnection;
        var JogoDAO = new app.app.models.JogoDAO(connection);
        JogoDAO.iniciaJogo(res, usuario, casa, msg);

    }
}

module.exports.sair = function(app, req, res) {
    req.session.destroy(function(err) {
        res.render('index', { sucesso: [{ msg: "Saiu." }], validacao: {}, dadosForm : {}  });
    });
}

module.exports.suditos = function(app, req, res) {
    if (req.session.autorizado !== true) {
        res.render('index', { validacao: [{ msg: "Usuário precisa fazer login" }], sucesso: {}, dadosForm : {}  });
        return;

    } else {

        res.render('aldeoes', { validacao: {} });

    }
}

module.exports.pergaminhos = function(app, req, res) {
    if (req.session.autorizado !== true) {
        res.render('index', { validacao: [{ msg: "Usuário precisa fazer login" }], sucesso: {}, dadosForm : {}  });
        return;

    } else {
        var connection = app.config.dbConnection;
        JogosDAO = new app.app.models.JogoDAO(connection);

        var usuario = req.session.usuario;

        JogosDAO.getAcoes(usuario, res);

    }
}

module.exports.ordenar_acao_suditos = function(app, req, res) {
    var dadosForm = req.body;

    req.assert('acao', 'Ação deve ser informada.').notEmpty();
    req.assert('quantidade', 'Quantidade deve ser informada.').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.redirect('jogo?msg=A');
        return;
    }

    var connection = app.config.dbConnection;
    var JogoDAO = new app.app.models.JogoDAO(connection);
    dadosForm.usuario = req.session.usuario;
    JogoDAO.acao(dadosForm);

    res.redirect('jogo?msg=B');

}

module.exports.revogar_acao = function(app, req, res) {
    var url_query = req.query;

    var connection = app.config.dbConnection;
    var JogoDAO = new app.app.models.JogoDAO(connection);

    var _id = url_query.id_acao;
    JogoDAO.revogar_acao(_id, res);
}