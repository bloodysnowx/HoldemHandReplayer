'use strict';

var _ = require('lodash');
var GetStatistics = require('./getStatistics.model');

// Get list of getStatisticss
exports.index = function(req, res) {
  GetStatistics.find(function (err, getStatisticss) {
    if(err) { return handleError(res, err); }
    return res.json(200, getStatisticss);
  });
};

// Get a single getStatistics
exports.show = function(req, res) {
  GetStatistics.findById(req.params.id, function (err, getStatistics) {
    if(err) { return handleError(res, err); }
    if(!getStatistics) { return res.send(404); }
    return res.json(getStatistics);
  });
};

// Creates a new getStatistics in the DB.
exports.create = function(req, res) {
  GetStatistics.create(req.body, function(err, getStatistics) {
    if(err) { return handleError(res, err); }
    return res.json(201, getStatistics);
  });
};

// Updates an existing getStatistics in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GetStatistics.findById(req.params.id, function (err, getStatistics) {
    if (err) { return handleError(res, err); }
    if(!getStatistics) { return res.send(404); }
    var updated = _.merge(getStatistics, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, getStatistics);
    });
  });
};

// Deletes a getStatistics from the DB.
exports.destroy = function(req, res) {
  GetStatistics.findById(req.params.id, function (err, getStatistics) {
    if(err) { return handleError(res, err); }
    if(!getStatistics) { return res.send(404); }
    getStatistics.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}