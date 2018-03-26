require('dotenv').config()
const express= require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Travel Thailand API.')
})

app.listen(PORT, () => console.log ('API up on ', PORT))
