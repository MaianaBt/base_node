require('dotenv').config({
    path: process.env.NODE_ENV === "local" ? ".env.local" : (process.env.NODE_ENV === "test" ? ".env.staging" : ".env")
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./app/routes/index.route');
const session = require('express-session');
const frameguard = require('frameguard');

let app = express();

//require('./app/util/services/starter')();

app.use(cors({ exposedHeaders: ['App-Version', 'Cache-Control'] }));
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store, no-cache");
    next();
});

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/', routes);


/* 
// Running front
app.use(express.static(path.join(__dirname, 'react-app/build')));
app.use(express.static('www', { maxAge: 1000 }));
app.use(session({
    cookieName: 'sessionName',
    secret: "secskyretmilhas",
    resave: false,
    saveUninitialized: true,
    httpOnly: true,  // dont let browser javascript access cookie ever
    secure: true, // only use cookie over https
    ephemeral: true // delete this cookie while browser close
}));

//Permitir iframe
app.use(frameguard({
    action: 'allow-from',
    domain: ''
}));*/

const PORT = 8080;

let server = app.listen(PORT, () => { console.log(`base api running on port ${PORT}`); });
