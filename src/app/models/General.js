const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const General = new Schema({
    name: {
        type: String,
        default: '#',
        maxlength: 255,
        required: true,
    },
    price: {
        type: String,
        default: '#',
        maxlength: 255,
    },
    image: {
        type: String,
        default: '#',
        maxlength: 300,
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true,
    },
    videoID: {
        type: String,
        default: '',
        maxlength: 300,
    },
    expirationDate: {
        type: String,
        default: '',
        maxlength: 255,
    },


}, {
    timestamps: true
})

//Add plugin
mongoose.plugin(slug)
General.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('General', General)