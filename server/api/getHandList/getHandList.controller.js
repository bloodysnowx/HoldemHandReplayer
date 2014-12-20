'use strict';

var _ = require('lodash');
var GetHandList = require('./getHandList.model');

// Get list of getHandLists
exports.index = function(req, res) {
  GetHandList.find(function (err, getHandLists) {
    if(err) { return handleError(res, err); }
    return res.json(200, getHandLists);
  });
};

// Get a single getHandList
exports.show = function(req, res) {
  GetHandList.findById(req.params.id, function (err, getHandList) {
    if(err) { return handleError(res, err); }
    if(!getHandList) { return res.send(404); }
    return res.json(getHandList);
  });
};

// Creates a new getHandList in the DB.
exports.create = function(req, res) {
  GetHandList.create(req.body, function(err, getHandList) {
    if(err) { return handleError(res, err); }
    return res.json(201, getHandList);
  });
};

// Updates an existing getHandList in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GetHandList.findById(req.params.id, function (err, getHandList) {
    if (err) { return handleError(res, err); }
    if(!getHandList) { return res.send(404); }
    var updated = _.merge(getHandList, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, getHandList);
    });
  });
};

// Deletes a getHandList from the DB.
exports.destroy = function(req, res) {
  GetHandList.findById(req.params.id, function (err, getHandList) {
    if(err) { return handleError(res, err); }
    if(!getHandList) { return res.send(404); }
    getHandList.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}