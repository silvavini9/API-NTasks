module.exports = function(app){
    app.listen(app.get("port"), function(){
        console.log(`NTask API - porta ${app.get("port")}`);
    });
}