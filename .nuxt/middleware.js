const middleware = {}

middleware['index'] = require('..\\middleware\\index.js')
middleware['index'] = middleware['index'].default || middleware['index']

export default middleware
