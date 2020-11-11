// require related bodules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashtalk')
const app = express()
const port = 3000

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const trashTalk = generateTrashTalk(options)
  res.render('index', { trashTalk })
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})