const express = require('express')
const app = express()

const AutoLoader = require("./autoloader");
AutoLoader.loadAll(app,'src','test','modules')


app.listen(3000, () => console.log(`Example app listening on port 3000!`))