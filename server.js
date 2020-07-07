const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var db = require("./models");
app.use(bodyParser.json())

const PORT = process.env.PORT || 5600;
const publicPath = path.join(__dirname, './chq-mate', 'public');

app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

if (process.env.NODE_ENV == "production") {
    app.use(express.static("./client/build/index.html"));
}

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });