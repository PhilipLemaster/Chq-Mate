const express = require('express');
const app = express();
const path = require('path');
var db = require("./models");
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const publicPath = path.join(__dirname, './chq-mate', 'public');

app.use(express.static(publicPath));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './client/build')))

app.use(routes);

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