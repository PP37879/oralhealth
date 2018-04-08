const express = require("express");
const router = express.Router();
const xlsx = require("xlsx-to-json");

//Register
router.post('/register', (req, res, next) => {
    res.send('User Registered');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('User Profile');
});

//Validation
router.get('/validate', (req, res, next) => {
    res.send('User Validate');
});

//import from file
router.get("/file", (req, res) => {
    res.send('Excel');
     xlsx({
            input:"test.xlsx",
            output:"output.json"
        },function(err,result){
            if(err){
                console.log("Error");
            }
        });
});
module.exports = router;