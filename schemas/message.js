var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ObjectId	 = Schema.ObjectId;

var MessageSchema   = new Schema({
    text: String,
    senderId: {type: ObjectId},
    receiverId: {type: ObjectId}
});

module.exports = mongoose.model('Message', MessageSchema);