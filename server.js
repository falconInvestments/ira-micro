const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 5280
app.use(express.json())
app.use(cors())

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

const routers = require('./routes/userRouter.js')
app.use('/users', routers)
const accountRouter = require('./routes/accountRouter.js')
app.use('/accounts', accountRouter)
const investmentRouter = require('./routes/investmentRouter.js')
app.use('/investments', investmentRouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;