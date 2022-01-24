const express = require('express')

const app = express()
const port = process.env.PORT || 5280
app.use(express.json())
app.use(cors())

const routers = require('./routes/userRouter.js')
app.use('/users', routers)
const accountRouter = require('./routes/accountRouter.js')
app.use('/accounts', accountRouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})