'use strict';
const connectToDatabase = require('./db');
const Delivery = require('./models/Delivery');
require('dotenv').config({ path: './variables.env' });


module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Delivery.create(JSON.parse(event.body))
        .then(delivery => callback(null, {
          statusCode: 200,
          body: JSON.stringify(delivery)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the delivery.'
        }));
    });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Delivery.findById(event.pathParameters.id)
        .then(delivery => callback(null, {
          statusCode: 200,
          body: JSON.stringify(delivery)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the delivery.'
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Delivery.find()
        .then(deliveries => callback(null, {
          statusCode: 200,
          body: JSON.stringify(deliveries)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the deliveries.'
        }))
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Delivery.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(delivery => callback(null, {
          statusCode: 200,
          body: JSON.stringify(delivery)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the deliveries.'
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Delivery.findByIdAndRemove(event.pathParameters.id)
        .then(delivery => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed delivery with id: ' + delivery._id, delivery: delivery })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the deliveries.'
        }));
    });
};