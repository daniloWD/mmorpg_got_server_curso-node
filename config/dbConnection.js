/* Importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function() {
    console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'got', //Nome do banco
        new mongo.Server(
            'localhost', //String contendo o endereço do servidor
            27017, //Porta da conexão
            {}
        ), {}
    );
    return db;

}

module.exports = function() {
    console.log(connMongoDB());
    return connMongoDB;
}