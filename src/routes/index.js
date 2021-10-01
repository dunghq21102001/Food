const viewRouter = require('./views')
const siteRouter = require('./site')
const meRouter = require('./me')
const generalsRouter = require('./generals')
function route(app){

    app.use('/me', meRouter)

    app.use('/generals', generalsRouter)
    
    app.use('/views', viewRouter)

    app.use('/', siteRouter)
  
}

module.exports = route