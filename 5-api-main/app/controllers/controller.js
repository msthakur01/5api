var customers = {
				customer1: {
					firstname: "Jack",
					lastname: "Davis",
					age: 25,
					id: 1
				},
				customer2: {
					firstname: "Mary",
					lastname: "Taylor",
					age: 37,
					id: 2
				},
				customer3: {
					firstname: "Peter",
					lastname: "Thomas",
					age: 17,
					id: 3
				},
				customer4: {
					firstname: "Peter",
					lastname: "Thomas",
					age: 17,
					id: 4
				}
			}

const create = function(req, res) {
	var newCustomer = req.body;
    customers["customer" + newCustomer.id] = newCustomer;
    res.end("Post Successfully: \n" + JSON.stringify(newCustomer, null, 4));
};

const findAll = function(req, res) {
    res.end("All Customers: \n" + JSON.stringify(customers, null, 4)); 
};

const findOne = function(req, res) {
    var customer = customers["customer" + req.params.id];
    res.end( "Find a Customer:\n" + JSON.stringify(customer, null, 4));
};

const update = function(req, res) {
	var id = parseInt(req.params.id);
	var updatedCustomer = req.body; 
	if(customers["customer" + id] != null){ 
		customers["customer" + id] = updatedCustomer;
		res.end("Update Successfully! \n" + JSON.stringify(updatedCustomer, null, 4));
	}else{
		res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
	}
};

const deleteu = function(req, res) {
	var deleteCustomer = customers["customer" + req.params.id];
    delete customers["customer" + req.params.id];
    res.end( "Deleted customer: \n" + JSON.stringify(deleteCustomer, null, 4));
};

module.exports = {create, findAll, findOne, update,deleteu}