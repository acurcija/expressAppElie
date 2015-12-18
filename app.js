// after we created all the folders - subl into app.js

var express = require('express');
var app = express ();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var knex = require('./db/knex');

// middleware - tools to intercept the command that converts into express
// express is minimalist aka - more flexibility for structuring 
// an application  instead of providing a full framework to abide by

// set adds additional properties to our app. view engine is the tool
// we are using and ejs is the language that tool uses - sets view engnine = ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));

app.get('/students', function(req,res){
	knex('students').then(function(students){
	// studentsInEjs:studentsFromDBthe values in the object are named that way for explanation only v
		res.render('index', {students:students})
	});
});

// app.get('/students/new', function(req,res){
// 	// studentsInEjs:studentsFromDBthe values in the object are named that way for explanation only v
// 		res.render('new');
// 	});

// app.post('/students', function(req,res){
// 	// knex ('student').insert({name: req.body.name})
// 	knex('students').insert(req.body).then(function(){
// 		res.redirect('/students');
// 	})
// })



app.listen(3000, function(){
	console.log('listening 3000...');
})



