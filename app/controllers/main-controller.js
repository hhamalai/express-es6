class MainController {
  index(req, res) {
    res.json({
      status: true
    })
  }
}

export default (app) => {  
  return app.MainController = new MainController()
}
