const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5600;
const publicPath = path.join(__dirname, './chq-mate', 'public');

app.use(express.static(publicPath));


var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/post-api-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });