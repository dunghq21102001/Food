const General = require('../models/General')
const {
    MongooseToOject
} = require('../../util/mongoose')

class generalsController {
    //[GET] 
    show(req, res, next) {
        General.findOne({
                slug: req.params.slug
            })
            .then(general => {
                res.render('generals/show', {
                    general: MongooseToOject(general)
                })
            })
            .catch(next)
    }

    //[GET] generals/create
    create(req, res, next) {
        res.render('generals/create')
    }

    //[POST] generals/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `http://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
        const general = new General(req.body)
        general.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }

    //[GET] generals/:id/edit
    edit(req, res, next) {
        General.findById(req.params.id)
            .then(general => res.render('generals/edit', {
                general: MongooseToOject(general) // ném data sang views/ handlebars
            }))
            .catch(next)

    }

    //[PUT] generals/:id/edit
    update(req, res, next) {
        General.updateOne({
                _id: req.params.id
            }, req.body)
            .then(() => res.redirect('/me/stored/cart'))
            .catch(next)

    }

    //[DELETE] /generals/:id
    delete(req, res, next) {
        General.delete({
                _id: req.params.id
            })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /generals/:id/force
    forceDelete(req, res, next) {
        General.deleteOne({
                _id: req.params.id
            })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[PATCH] /generals/:id/restore
    restore(req, res, next) {
        General.restore({
                _id: req.params.id
            })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[POST] /generals/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                General.delete({
                        _id: {
                            $in: req.body.foodIds
                        }
                    })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.json({
                    message: 'Action invalid!'
                })
        }
    }

}
module.exports = new generalsController