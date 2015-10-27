import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import errorHandler from 'errorhandler'
import morgan from 'morgan'
import bootstrap from '../bootstrap/bootstrap'
import routes from './routes'
import pck from '../package.json'

let port = process.env.PORT || 3000
let env = process.env.NODE_ENV || 'development'

var app = express()

bootstrap(app)

if (process.argv.indexOf('-p') >= 0) {
  port = parseInt(process.argv[process.argv.indexOf('-p') + 1])
}

app.set('port', port)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(morgan('combined'))

if (env == 'development') {
  app.use(errorHandler())
}

routes(app)

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server ${pck.name} is listening on port ${app.get('port')} in ${app.settings.env} mode`)
})
