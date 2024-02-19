const express = require('express');
const app = express();
const f1 = require('./people.json')

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function ( req, res){
    //res.send('Hello world!')
    res.render('index', {
        title: 'F1 Drivers and Teams',
        driver : f1.driver,
        team : f1.team

    });
});

app.get('/profile', (req, res) =>{
    const person = people.profiles.find((p) => p.id === req.query.id);
    res.render('profile', {
        title: `About ${person.firstname} ${person.lastname}`,
        person,
    });
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});

