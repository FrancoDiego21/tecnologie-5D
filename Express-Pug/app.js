const express = require('express');
const app = express();
const drivers = require('./drivers.json');
const teams = require('./teams.json');

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function ( req, res){
    //res.send('Hello world!')
    res.render('index', {
        title: 'F1 Drivers and Teams',
        drivers: drivers.piloti,
        teams: teams.team

    });
});




app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});

