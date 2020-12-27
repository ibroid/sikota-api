const { loadNuxt, build } = require('nuxt')
const dotenv = require('dotenv');
const app = require('express')()
const isDev = process.env.ENVIRONMENT !== 'production'
const port = process.env.PORT || 80
// const routeAPI = require('./routes/api');

dotenv.config({ path: './config.env' });

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // app.use(nuxt.render) 
  app.get('/', (req, res) => {
    nuxt.renderRoute('/').then((result) => {
      res.send(result.html)
    })
  })
  app.get('/developer', (req, res) => {
    req.data = [{ nama: 'imal' }, { nama: 'malik' }]
    nuxt.renderRoute('/imal', { req }).then((result) => {
      res.send(result.html)
    })
  })

  app.get('/test', (req, res) => {
    res.send({
      text: 'Hello Wordl'
    })
  })

  // app.use(routeAPI);

  if (isDev) {
    build(nuxt)
  }
  app.listen(port, () => {
    console.log('SERVER RUNNING ON ' + port)
  })
}

start()
