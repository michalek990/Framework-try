const express = require('express')
const app = express()
const routes = require('./api/routes')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded())
app.use('/api/users', require('./middleware/metoda'))
app.use('/api/users', require('./api/routes'))

app.listen(PORT, () => console.log(`Serwer działa na porcie: ${PORT}`))
