const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const dirPath = path.join(__dirname, '/public/assets/pdf');
const PORT = process.env.PORT || 3001;

const files = fs.readdirSync(dirPath).map(name => {
    return {
        name: path.basename(name, '.pdf'),
        url: `/pdf/${name}`
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', { files }));

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));