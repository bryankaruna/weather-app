const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const app = express();

//set path
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set app
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static serve directory
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome',
        name: 'Bryan',
        icon: 'img/weather.png'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Bryan',
        icon: 'img/weather.png'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'A very helpful text',
        title: 'Help',
        name: 'Bryan',
        icon: 'img/weather.png'
    });
});

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'please provide address'
        });
    }
    geocode(req.query.address, (error, {lon, lat, place} = {}) => {
        
        if(error){
            return res.send({error: error});
        }

        forecast(lat,lon,(error,{summary,rain,temperature} = {}) => {
            if(error){
                return res.send({error: error});
            }
            res.send({
                address: req.query.address,
                location: place,
                forecast: summary
            });
        });
    });
});

//query string
app.get('/products', (req,res) => {
    if(!req.query.search){
        return res.send({
            error: 'you must include search'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    });
});

//handle specific error
app.get('/help/*', (req,res) => {
    res.render('404', {
        title: 'Help 404',
        name: 'Bryan',
        errorMsg: 'Help article not found.'
    });
});

//handle error
app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'bryan',
        errorMsg: 'Sorry the page is unavailable.'
    });
});


//port
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

//route
// app.get('', (req, res) => {
//     res.send('Hello express');
// });

// app.get('/about', (req,res) => {
//     res.send('<h1>about page</h1>');
// });