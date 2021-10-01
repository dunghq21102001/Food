const General = require('../models/General')
const {mutipleMongooseToOject} = require('../../util/mongoose')
class SiteController {
    //[GET] /
    index(req, res, next) {
        // res.render('home')


        //test    
        General.find({})
            .then(generals => {              
                res.render('home', {
                    generals: mutipleMongooseToOject(generals), // ném data sang views/ handlebars
                })
            })
            .catch(next)

    }

    //[GET] /search
    search(req, res) {
        res.render('search')
    }

}
module.exports = new SiteController