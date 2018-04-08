const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mySql = require("mysql")
const xlsx = require("xlsx-to-json");
const app = express();
const users = require('./routes/users');
const index = require("./routes/index") ;
var multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
var crypto = require('crypto');
var LocalStrategy = require('passport-local').Strategy;
var sess = require('express-session');
var connection = require('./config/database');


//port number
const port = process.env.PORT || 8080;


//CORS middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body-Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use('local',new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
},function(req,username,password,done){
    var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
    connection.query("select DEN_USERNAME from dentist where DEN_USERNAME = ?",[username],function(err,rows){
        if(err) return done(null,false);
        if(!rows.length){
            return done(null,false);
        }
        salt = salt+''+password;
        var encodePassword = crypto.createHash('sha1').update(salt).digest('hex');
        var dbPassword = rows[0].DEN_PASSWORD;
        if(dbPassword !== encodePassword){
            console.log("Password does not match");
            return done(null,false);
        }
        return done(null,rows[0]);
    })
}));


app.use("/",index);


//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//start server
app.use(bodyParser.urlencoded({
    extended: true
}));

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './file/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});
var upload = multer({ //multer settings
                storage: storage,
                fileFilter : function(req, file, callback) { //file filter
                    if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                        return callback(new Error('Wrong extension type'));
                    }
                    callback(null, true);
                }
            }).single('file');
/** API path that will upload the files */
app.post('/file', function(req, res) {
    var exceltojson;
    upload(req,res,function(err){
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
        /** Multer gives us file info in req.file object */
        if(!req.file){
            res.json({error_code:1,err_desc:"No file passed"});
            return;
        }
        /** Check the extension of the incoming file and 
         *  use the appropriate module
         */
        if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
            exceltojson = xlsxtojson;
        } else {
            exceltojson = xlstojson;
        }
        try {
            exceltojson({
                input: req.file.path,
                output: null, //since we don't need output.json
                lowerCaseHeaders:true
            }, function(err,result){
                if(err) {
                    return res.json({error_code:1,err_desc:err, data: null});
                } 
                res.json({error_code:0,err_desc:null, data: result});
            });
        } catch (e){
            res.json({error_code:1,err_desc:"Corupted excel file"});
        }
    })
}); 

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

