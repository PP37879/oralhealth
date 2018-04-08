var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');  

//Serialize Sessions
passport.serializeUser(function(user,done){
    done(null,user);
});

//Deserialize Sessions
passport.deserializeUser(function(user,done){
    db.User.find({where: {id : user.id}}.success(function(user){
        done(null,user);
    }).error(function(err){
        done(err,null);
    }))
})

//Authentication
passport.use(new LocalStrategy(
    function(username,password,done){
        db.User.find({where:{DEN_USERNAME:username}}).success(function(user){
            pwd = user ? user.password : '';
            isMatch = db.User.validatePassword(password,pwd,done,user);
        });
    }
))