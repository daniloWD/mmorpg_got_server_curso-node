module.exports = function(app) {
    app.get('/jogo', function(req, res) {
        app.app.controllers.jogo.jogo(app, req, res);
    });

    app.get('/sair', function(req, res) {
        app.app.controllers.jogo.sair(app, req, res);
    });
}