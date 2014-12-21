'use strict';

var _ = require('lodash');
var GetStatisticsList = require('./getStatisticsList.model');

// Get list of getStatisticsLists
exports.index = function(req, res) {
  GetStatisticsList.find(function (err, getStatisticsLists) {
    if(err) { return handleError(res, err); }
    return res.json(200, getStatisticsLists);
  });
};

// Get a single getStatisticsList
exports.show = function(req, res) {
  GetStatisticsList.findById(req.params.id, function (err, getStatisticsList) {
    if(err) { return handleError(res, err); }
    if(!getStatisticsList) { return res.send(404); }
    return res.json(getStatisticsList);
  });
};

// Creates a new getStatisticsList in the DB.
exports.create = function(req, res) {
  GetStatisticsList.create(req.body, function(err, getStatisticsList) {
    if(err) { return handleError(res, err); }
    return res.json(201, getStatisticsList);
  });
};

// Updates an existing getStatisticsList in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GetStatisticsList.findById(req.params.id, function (err, getStatisticsList) {
    if (err) { return handleError(res, err); }
    if(!getStatisticsList) { return res.send(404); }
    var updated = _.merge(getStatisticsList, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, getStatisticsList);
    });
  });
};

// Deletes a getStatisticsList from the DB.
exports.destroy = function(req, res) {
  GetStatisticsList.findById(req.params.id, function (err, getStatisticsList) {
    if(err) { return handleError(res, err); }
    if(!getStatisticsList) { return res.send(404); }
    getStatisticsList.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}