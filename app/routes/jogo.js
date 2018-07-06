module.exports = function(app) {
    app.get('/jogo', function(req, res) {
        app.app.controllers.jogo.jogo(app, req, res);
    });

    app.get('/sair', function(req, res) {
        app.app.controllers.jogo.sair(app, req, res);
    });

    app.get('/suditos', function(req, res) {
        app.app.controllers.jogo.suditos(app, req, res);
    });

    app.post('/ordenar_acao_suditos', function(req, res) {
        app.app.controllers.jogo.ordenar_acao_suditos(app, req, res);
    });

    app.get('/pergaminhos', function(req, res) {
        app.app.controllers.jogo.pergaminhos(app, req, res);
    });

    app.get('/revogar_acao', function(req, res) {
        app.app.controllers.jogo.revogar_acao(app, req, res);
    });
}