// const { loadNuxt, build } = require('nuxt')
const dotenv = require('dotenv');
const express = require('express');
const app = require('express')()
const bodyParser = require('body-parser');
const APIrouter = require('./routes/api')
const database = require('./databases/mongodb')
const fileUpload = require('express-fileupload')
const cors = require('cors');

dotenv.config({ path: './config.env' });
const isDev = process.env.ENVIRONMENT !== 'production'
const port = process.env.PORT || 5000

async function start() {
  // const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  database._connect
  app.use(express.static('uploads'));
  app.use(fileUpload())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', cors(), APIrouter);
  app.get('/', (req, res) => {
    res.send('Homepage')
  })
  // if (isDev) {
  //   build(nuxt)
  // }
  app.listen(port, () => {
    console.log('SERVER RUNNING ON ' + port)
  })
}

start()
