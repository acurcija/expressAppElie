// after we created all the folders - subl into router.js

// var express = require('express');
// var router = express.Router();
// var knex = require('../db/knex');

// router.get('/', function(req,res){
// 	knex('').then(function(){
// 	// InEjs:FromDBthe values in the object are named that way for explanation only v
// 		res.render('index', {:})
// 	});
// });

// router.get('//new', function(req,res){
// 	// InEjs:FromDBthe values in the object are named that way for explanation only v
// 		res.render('new');
// 	});

// router.post('/', function(req,res){
// 	// knex ('student').insert({name: req.body.name})
// 	knex('').insert(req.body).then(function(){

	// whenever redirecting - need an absolute path
// 		res.redirect('/students');
// 	})
// })

// // the colon makes it so the id is a parameter in the url
// router.get('//:id/edit', function(req, res){
// 	// find a student
// 	var id = req.params.id;
// 	knex('').where({id: id}).first().then(function(student){
// 		res.render('edit', {student:student});
// 	// render 'edit' and pass into your ejs file
// 	//the student that you have found
// 	});
// });

// // put should be used to edit - correct HTTP verb
// router.put('//:id', function(req, res){
// 	// use knex to update the student
// 	knex('').where({id: req.params.id}).first().update(req.body).then(function(){
// 		res.redirect('/students');
// 	});
// }); 

// 	//eval(locus)
// router.delete('//:id', function(req, res){

// 	knex('').where({id:req.params.id}).del().then(function(){
// 		res.redirect('/students');
// 	});
// });


// router.listen(3000, function(){
// 	console.log('listening 3000...');
// })



// module.exports = router;

// 