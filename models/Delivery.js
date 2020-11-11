const mongoose = require('mongoose');
const DeliverySchema = new mongoose.Schema({  
  name: String,
  phoneNumber: String,
  email: String,
  notes: String,
  size: String,
  weight: Number,
  fragile: Boolean,
  pickUp: {
    address: String,
    postcode: String,
    city: String,
    date: String
  },
  dropOff: {
    address: String,
    postcode: String,
    city: String,
    name: String,
    phoneNumber: String,
    email: String
  }
  
});
module.exports = mongoose.model('Delivery', DeliverySchema);