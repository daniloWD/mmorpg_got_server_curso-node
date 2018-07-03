module.exports.jogo = function(app, req, res) {
    if (req.session.autorizado) {

        res.render('jogo');
    } else {
        res.render('index', { validacao: [{ msg: "Usuário precisa fazer login" }], sucesso: {} });
    }
}

module.exports.sair = function(app, req, res) {
    req.session.destroy(function(err) {
        res.render('index', { sucesso: [{ msg: "Saiu." }], validacao: {} });
    });
}