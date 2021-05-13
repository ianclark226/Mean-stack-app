var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var connectDB = require('./DB/conncection');

var port = 3000;

var app = express();

connectDB();

//View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder

app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);
app.use('/api/taskModel', require('./Api/Task'));

app.listen(port, function() {
    console.log('server started on port' +port);
})