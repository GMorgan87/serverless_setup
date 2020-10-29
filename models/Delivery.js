const mongoose = require('mongoose');
const DeliverySchema = new mongoose.Schema({  
  name: String,
  address: String,
  city: String,
  postcode: String,
  phoneNumber: String,
  email: String,
  notes: String,
  date: String
});
module.exports = mongoose.model('Delivery', DeliverySchema);