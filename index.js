const { loadNuxt, build } = require('nuxt')
const dotenv = require('dotenv');
const app = require('express')()
const bodyParser = require('body-parser');
const APIrouter = require('./routes/api')
const database = require('./databases/mongodb')
const cors = require('cors');

dotenv.config({ path: './config.env' });
const isDev = process.env.ENVIRONMENT !== 'production'
const port = 5000

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  database._connect

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', cors(), APIrouter);

  app.get('/', (req, res) => {
    nuxt.renderRoute('/').then((result) => {
      res.send(result.html)
    })
  })


  app.get('/transit', (req, res) => {
    req.data =
      nuxt.renderRoute('/transit').then((result) => {
        res.send(result.html)
      })
  })

  if (isDev) {
    build(nuxt)
  }
  app.listen(port, () => {
    console.log('SERVER RUNNING ON ' + port)
  })
}

start()
