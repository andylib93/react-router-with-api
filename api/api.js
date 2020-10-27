const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/url', (req, res, next) => {
    res.json([
        {"id": 1,"name": "gyros","type": "greek"},
        {"id": 2,"name": "pizza","type": "italian"},
        {"id": 3,"name": "schnitzel","type": "german"},
        {"id": 4,"name": "burger","type": "american"},
        {"id": 5,"name": "enchiladas","type": "mexican"}
    ])
})

// app.get('/url/:smth', (req,res,next) => res.json(req.params.smth))
    
app.listen(3333, () => console.log('Server running on port 3333'))
