
exports.up = function(knex, Promise) {
	// create table takes in two args - table name and callback function
  	return knex.schema.createTable('students', function(table){
  		
  		table.increments();
  		table.string('name');

  	})
};

exports.down = function(knex, Promise) {
	//dropTable takes in one parameter
  	return knex.schema.dropTable('students');

};
