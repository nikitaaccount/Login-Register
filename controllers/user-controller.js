const { validationResult, matchedData } = require('express-validator');
var db=require('../database');

module.exports={
    userForm:function(req, res) {
        res.render('registration-form');
    },
    validateForm:function(req,res){
        const errors= validationResult(req);
        if(!errors.isEmpty())
        {
            var errMsg= errors.mapped();
            var inputData = matchedData(req);  
            res.render('registration-form', {errors:errMsg, inputData:inputData});
        }
        else
        {
            var inputData = matchedData(req); 
            var sql = 'INSERT INTO users SET ?';
            db.query(sql, inputData, function (err, data) 
            {
               if (err) throw err;
            });
            var msg ="You are successfully registered";
            res.render('registration-form',{alertMsg:msg})
        }
     
    }
}