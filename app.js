// after we created all the folders - subl into app.js

var express = require('express');
var app = express ();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var knex = require('./db/knex');
var methodOverride = require('method-override');
//require ('locus');

// middleware - tools to intercept the command that converts into express
// express is minimalist aka - more flexibility for structuring 
// an application  instead of providing a full framework to abide by

// set adds additional properties to our app. view engine is the tool
// we are using and ejs is the language that tool uses - sets view engnine = ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.get('/students', function(req,res){
	knex('students').then(function(students){
	// studentsInEjs:studentsFromDBthe values in the object are named that way for explanation only v
		res.render('index', {students:students})
	});
});

app.get('/students/new', function(req,res){
	// studentsInEjs:studentsFromDBthe values in the object are named that way for explanation only v
		res.render('new');
	});

app.post('/students', function(req,res){
	// knex ('student').insert({name: req.body.name})
	knex('students').insert(req.body).then(function(){
		res.redirect('/students');
	});
});

// the colon makes it so the id is a parameter in the url
app.get('/students/:id/edit', function(req, res){
	// find a student
	knex('students').where({id: req.params.id}).first().then(function(student){
		res.render('edit', {student:student});
	// render 'edit' and pass into your ejs file
	//the student that you have found
	});
});

// put should be used to edit - correct HTTP verb
app.put('/students/:id', function(req, res){
	// use knex to update the student
	knex('students').where({id: req.params.id}).first().update(req.body).then(function(){
		res.redirect('/students');
	});
}); 

	//eval(locus)
app.delete('/students/:id', function(req, res){

	knex('students').where({id:req.params.id}).del().then(function(){
		res.redirect('/students');
	});
});


app.listen(3000, function(){
	console.log('listening 3000...');
});
