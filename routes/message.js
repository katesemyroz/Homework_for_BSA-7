const router = require('express').Router();
var Message     = require('../schemas/message');




router.route('/')
    .post(function(req, res) {
        var message = new Message();
        message.text = req.body.text;
        message.senderId = req.body.senderId;
        message.receiverId = req.body.receiverId;
        message.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'message created!' });
        });

    })

    .get(function(req, res) {
        Message.find(function(err, messages) {
            if (err)
                res.send(err);

            res.json(messages);
        });
    });

router.route('/:id')

	.get(function(req, res) {
        Message.findById(req.params.id, function(err, message) {
            if (err)
                res.send(err);
            res.json(message);
        });
    })

    .put(function(req, res) {
        Message.findById(req.params.id, function(err, message) {
            if (err)
                res.send(err);
            message.text = req.body.text;
            message.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'message updated!' });
            });

        });
    })

    .delete(function(req, res) {
    	Message.remove({
    		_id: req.params.id
    	}, function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


module.exports = router;