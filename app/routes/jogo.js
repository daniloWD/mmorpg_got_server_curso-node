module.exports = function(app) {
    app.get('/jogo', function(req, res) {
        app.app.controllers.jogo.jogo(app, req, res);
    });
}