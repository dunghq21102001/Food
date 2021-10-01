const General = require('../models/General')
const {
    mutipleMongooseToOject
} = require('../../util/mongoose')
class meController {
    //[GET] /me/stored/cart
    storeCart(req, res, next) {
        let FoodQuery = General.find({})

        if(req.query.hasOwnProperty('_sort')){
            FoodQuery = FoodQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([FoodQuery, General.countDocumentsDeleted()])               // phần này
            .then(([generals, deleteCount]) => res.render('me/store-Cart', {    //là 
                deleteCount: deleteCount,                                       //ở
                generals: mutipleMongooseToOject(generals)                      //31.
            }))                                                                 //Deleted count documents
            .catch(next)                                                        //

        // General.countDocumentsDeleted()
        //     .then((deleteCount) => {
        //     })
        //     .catch(() => {})

        // General.find({})
        //     .then(generals => res.render('me/store-Cart', {
        //         generals: mutipleMongooseToOject(generals) // ném data sang views/ handlebars
        //     }))
        //     .catch(next)

    }

    //[GET] me/trash/cart
    trashCart(req, res, next) {
        General.findDeleted({})
            .then(generals => res.render('me/trash-Cart', {
                generals: mutipleMongooseToOject(generals) // ném data sang views/ handlebars
            }))
            .catch(next)
    }

}
module.exports = new meController