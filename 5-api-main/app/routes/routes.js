const { create, findAll, findOne, update, deleteu } = require("../controllers/controller");

module.exports = function(app) {

    app.post('/api/customers', create);


    app.get('/api/customers', findAll);


    app.get('/api/customers/:id', findOne);


    app.put('/api/customers/:id', update);

   
    app.delete('/api/customers/:id',deleteu);
}