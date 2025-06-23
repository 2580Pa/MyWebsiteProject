const mongoose = require('mongoose');
const University = new mongoose.Schema({ name: String, city: String });
mongoose.connect('mongodb://localhost/universities', { useNewUrlParser: true });
module.exports = mongoose.model('University', University);
