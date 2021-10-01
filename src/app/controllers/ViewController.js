class ViewController{
    //[GET]/ views
    index(req, res){
        res.render('views')
    }

    //[GET]/ views/:slug
    show(req, res){
        res.send('New page')
    }
    
}
module.exports = new ViewController 