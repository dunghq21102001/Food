module.exports = {
    mutipleMongooseToOject: function(mongooseArrays){
        return mongooseArrays.map(mongoose => mongoose.toObject())
    },
    MongooseToOject: function (mongoose){
        return mongoose? mongoose.toObject() : mongoose
    }
}