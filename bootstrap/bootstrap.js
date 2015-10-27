import loader from './loader'

export default (app) => {
  app.loader = loader

  app.loader.autoload(`${__dirname}/../app/controllers`, app)
  app.loader.autoload(`${__dirname}/../app/models`, app)
  app.loader.autoload(`${__dirname}/../app/services`, app)
}
