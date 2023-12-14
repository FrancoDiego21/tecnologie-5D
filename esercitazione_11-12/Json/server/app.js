const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/api', (req, res) => {
    var jsonData = {
        "drivers": [
          {
            "nome": "Max Verstappen",
            "immagine": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1701270073824.jpg",
            "nazionalita": "Olanda",
            "numero": 1,
            "scuderia": "Red Bull",
            "podi": 98
          },
          {
            "nome": "Sergio Perez",
            "immagine": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.640.medium.jpg/1677069773437.jpg",
            "nazionalita": "Messico",
            "numero": 11,
            "scuderia": "Red Bull",
            "podi": 35
          },
          {
            "nome": "Charles Leclerc",
            "immagine": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg.img.1536.high.jpg",
            "nazionalita": "Monaco",
            "numero": 16,
            "scuderia": "Ferrari",
            "podi": 30
          },
          {
            "nome": "Carlos Sainz",
            "immagine": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1536.high.jpg",
            "nazionalita": "Spagna",
            "numero": 55,
            "scuderia": "Ferrari",
            "podi": 18
          },
          {
            "nome": "Lewis Hamilton",
            "immagine": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.640.medium.jpg/1677069594164.jpg",
            "nazionalita": "Inghilterra",
            "numero": 44,
            "scuderia": "Mercedes",
            "podi": 197
          },
          {
            "nome": "George Russell",
            "immagine": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/russell.jpg.img.1920.medium.jpg/1677069334466.jpg",
            "nazionalita": "Inghilterra",
            "numero": 63,
            "scuderia": "Mercedes",
            "podi": 11
          }
        ],
        "teams": [
          {
            "nome": "Red Bull",
            "logo": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg",
            "nomeAuto": "RB18",
            "campionatiVinti": 6,
            "annoIngresso": 1997,
            "base": "Milton Keynes, Regno Unito",
            "immagineAuto": "https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/2col/image.png"
          },
          {
            "nome": "Ferrari",
            "logo": "https://media.formula1.com/content/dam/fom-website/teams/Ferrari/logo-ferrari-18%20.jpg",
            "nomeAuto": "SF-23",
            "campionatiVinti": 16,
            "annoIngresso": 1950,
            "base": "Maranello, Italia",
            "immagineAuto": "https://media.formula1.com/content/dam/fom-website/teams/2023/ferrari.png.transform/2col/image.png"
          },
          {
            "nome": "Mercedes",
            "logo": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes.jpg",
            "nomeAuto": "W 14",
            "campionatiVinti": 8,
            "annoIngresso": 1970,
            "base": "Brackley, Regno Unito",
            "immagineAuto": "https://media.formula1.com/content/dam/fom-website/teams/2023-Team-Pages/teamcar-mercedes.png.transform/2col/image.png"
          }
        ]};

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));   
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});