var mongoose = require('mongoose');
    model = require('./model'),
    Schema = mongoose.Schema;

var controller = function(app) {
    var db = mongoose.connect('mongodb://localhost/TE-web');

    //get Example
    app.get('/getSession/:user', function(req, res){
        if(!!req.params.user){
            mongoose.model(model.User.name).find({email: { $regex: '.*'+req.params.user+'.*', $options: 'i' }}, function(err, lookup) {
                res.json(lookup);
            });
        }else{
            res.status(404).redirect('/#404');
        }
    });

};

module.exports = controller;
































