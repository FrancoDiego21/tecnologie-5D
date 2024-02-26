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
        

    });
});

app.get('/piloti', function(req, res){
    res.render('piloti',{
        title: 'Piloti F1',
        driver: drivers.piloti

    });
});

app.get('/auto', function(req, res){
    res.render('auto',{
        title: 'Auto F1',
        teams: teams.team

    });
});


app.get('/driver', function(req, res){
    const dr = drivers.piloti.find((p) => p.id == req.query.id);
    res.render('driver', {
        title:  `About pilota`,
        dr,

    });
});

app.get('/team', function(req, res){
    const t = teams.team.find((p) => p.id == req.query.id);
    res.render('team', {
        title:  `About ${t.nome}`,
        t,

    });
});





app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});

