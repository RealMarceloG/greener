const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// middlewares

// routes
// app.get('/', (req, res) => {
//     //res.send('Hello World');
//     //console.log(__dirname + '/views/index.html');
//     //res.sendFile(path.join(__dirname, 'views/index.html'));
//     //res.render('index', {title:'App'} );
    

    
// });
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/img')));

// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});