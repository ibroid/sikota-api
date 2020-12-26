const { loadNuxt, build } = require('nuxt')
const dotenv = require('dotenv');
const app = require('express')()
const isDev = process.env.ENVIRONMENT !== 'production'
const port = process.env.PORT || 5000

dotenv.config({path:'./config.env'});

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // app.use(nuxt.render) 
  app.get('/', (req, res) => {
    nuxt.renderRoute('/').then((result) => {
      res.send(result.html)
    })
  })
  app.get('/imal', (req, res) => {
    req.data = [{ nama: 'imal' },{nama: 'malik'}]
    nuxt.renderRoute('/imal', { req }).then((result) => {
      res.send(result.html)
    })
  })

  if (isDev) {
    build(nuxt)
  }
  app.listen(port,() => {
    console.log('SERVER RUNNING ON ' + port)
  })
}

start()