const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const encoder=bodyParser.urlencoded({extended:true});
app.use(encoder);

app.use(session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 1000, // 1hr
    }
}));

var registrationRouter = require('./routes/registration-route');
var loginRouter = require('./routes/login-route');
var dashboardRouter = require('./routes/dashboard-route');
var logoutRouter = require('./routes/logout-route');

app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);

app.use(express.static(path.join(__dirname, 'public')));


app.use('/',(req,res)=>
 {
     res.send('<h1>404 not found</h1>');
 });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on port 5000'));

