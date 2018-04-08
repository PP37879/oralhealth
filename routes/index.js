const express   = require("express");
const router    = express.Router();

const users      = require("./users");

router.use("/users",users);

router.get("/",(req,res)=>{
    console.log("this is /");
    res.send("this is home page /");
});

module.exports = router;
exports.IsAuthenticate = function(req,res,next){
    if(req.IsAuthenticate()){
        next();
    }else{
        next(new Error(401));
    }
};

exports.destroySession = function(req,res,next){
    req.logOut();
    req.session.destroy();
    req.redirect('/');
}
