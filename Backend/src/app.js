const express =  require('express');
const app =  express(); 
const cors = require("cors");
const aiRoutes = require('./routes/ai.route')
app.use(express.json())
app.use(cors())



app.get('/', (req, res)=>{
    res.send("Hello from jahir bhai")
})

app.use('/ai', aiRoutes)

module.exports = app