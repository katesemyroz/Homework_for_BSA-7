const router = require('express').Router();
var User     = require('../schemas/user');




router.route('/')
    .post(function(req, res) {
        var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.login = req.body.login;  
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'user created!' });
        });

    })

    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

router.route('/:id')

	.get(function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })

    .put(function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err)
                res.send(err);
            user.name = req.body.name;
            user.email = req.body.email;
            user.login = req.body.login;
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'user updated!' });
            });

        });
    })

    .delete(function(req, res) {
    	User.remove({
    		_id: req.params.id
    	}, function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


module.exports = router;