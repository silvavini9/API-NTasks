module.exports = function(app){
    return{
        findAll : function(params, callback) {
            return callback([
                {title: "Fazer compras"},
                {title: "Consertar o pc"}
            ]);
        }
    }
}