const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5600;
const publicPath = path.join(__dirname, './chq-mate', 'public');

app.use(express.static(publicPath));

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}