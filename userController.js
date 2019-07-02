// Import user model
User = require('./userModel');

exports.index = function (req, res) {
    User.get(function (err, user) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            data: user
        });
    });
};

exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email;

    user.save(function (err) {
        if (err){
            res.json(err);
        }else{
            res.json({
                message: 'Nuevo Usuario Creado',
                data: user
            });
        }
    });
};