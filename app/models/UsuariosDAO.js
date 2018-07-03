function UsuariosDAO(connection) {

    this._connection = connection();

}

UsuariosDAO.prototype.inserirUsuario = function(usuario) {
    // console.log(this._connection.open);
    // this._connection.open(function(err, mongoclient) {
    //     mongoclient.collection("usuarios", function(err, collection) {
    //         collection.insert(usuario);

    //         mongoclient.close();
    //     });
    // });
}

module.exports = function() {
    return UsuariosDAO;
}