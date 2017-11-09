//Import body-parser module using require

//Import express module using require

//create app instance of express


//Initialize body parser module with app

//Define Web APIs end points

//export the app module

var express = require('express');
var app = express();
var path = require('path');
bodyParser = require('body-parser');
let config = require('./config');
let Users = require('./model/users');
const mongoose = require('mongoose');
// viewed at http://localhost:8080
// module.exports = function(req,res){

  mongoose.connect(config.database.local);
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.urlencoded({extended:false}))
//  app.engine('html', require('ejs').renderFile);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'html');

      //trying to write via form to json
      app.post('/insertUser', function(req, res) {

        let insertUser = new Users();
          insertUser.loginName = req.body.LoginName;
          insertUser.userName = req.body.UserName;
          insertUser.passWord = req.body.passwd;
          insertUser.emailID = req.body.email;

        insertUser.save(function(error)
        {
          if(error)
          {
            res.json({success: false, message: error});
          }
          else
          {
             res.json({success: true, message: 'User is added successfully'});
          }
        });
      });
// to see all records of users
      app.get('/view', function(req, res) {
        Users.find(function(err, users)
        {
          if (err)
          {
            res.json({success: false, message: err});
          }
          else
          {
            res.json({success: true, data: users});
          }
        });
      });

//to update password of a given users

/*app.delete('/delete/:userName', function(req, res) {
let usrnme = req.params.userName;
Movie.remove({_id: movieId}, function(err)
{
 if(err)
 {
   res.json({success: false, message: err});
 }
 else
 {
   res.json({success: true, message: 'Movie is deleted successfully'});
 }
});
});*/



module.exports = app;
