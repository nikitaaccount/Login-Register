var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res) {
    if(req.session.loggedinUser){
        res.render('dashboard',{email:req.session.email})
    }else{
        res.redirect('/login');
    }
});
module.exports = router;