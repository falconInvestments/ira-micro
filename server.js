const express = require('express')

const app = express()
const port = 3000
app.use(express.json())

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