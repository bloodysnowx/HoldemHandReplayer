'use strict';

var _ = require('lodash');
var GetHand = require('./getHand.model');

// Get list of getHands
exports.index = function(req, res) {
  GetHand.find(function (err, getHands) {
    if(err) { return handleError(res, err); }
    return res.json(200, getHands);
  });
};

// Get a single getHand
exports.show = function(req, res) {
  GetHand.findById(req.params.id, function (err, getHand) {
    if(err) { return handleError(res, err); }
    if(!getHand) { return res.send(404); }
    return res.json(getHand);
  });
};

// Creates a new getHand in the DB.
exports.create = function(req, res) {
  GetHand.create(req.body, function(err, getHand) {
    if(err) { return handleError(res, err); }
    return res.json(201, getHand);
  });
};

// Updates an existing getHand in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GetHand.findById(req.params.id, function (err, getHand) {
    if (err) { return handleError(res, err); }
    if(!getHand) { return res.send(404); }
    var updated = _.merge(getHand, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, getHand);
    });
  });
};

// Deletes a getHand from the DB.
exports.destroy = function(req, res) {
  GetHand.findById(req.params.id, function (err, getHand) {
    if(err) { return handleError(res, err); }
    if(!getHand) { return res.send(404); }
    getHand.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}