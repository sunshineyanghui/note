var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String}
  }
);

module.exports = mongoose.model('User', UserSchema);
