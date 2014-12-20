'use strict';

var _ = require('lodash');
var UploadHandHistory = require('./uploadHandHistory.model');

// Get list of uploadHandHistorys
exports.index = function(req, res) {
  UploadHandHistory.find(function (err, uploadHandHistorys) {
    if(err) { return handleError(res, err); }
    return res.json(200, uploadHandHistorys);
  });
};

// Get a single uploadHandHistory
exports.show = function(req, res) {
  UploadHandHistory.findById(req.params.id, function (err, uploadHandHistory) {
    if(err) { return handleError(res, err); }
    if(!uploadHandHistory) { return res.send(404); }
    return res.json(uploadHandHistory);
  });
};

// Creates a new uploadHandHistory in the DB.
exports.create = function(req, res) {
  UploadHandHistory.create(req.body, function(err, uploadHandHistory) {
    if(err) { return handleError(res, err); }
    return res.json(201, uploadHandHistory);
  });
};

// Updates an existing uploadHandHistory in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  UploadHandHistory.findById(req.params.id, function (err, uploadHandHistory) {
    if (err) { return handleError(res, err); }
    if(!uploadHandHistory) { return res.send(404); }
    var updated = _.merge(uploadHandHistory, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, uploadHandHistory);
    });
  });
};

// Deletes a uploadHandHistory from the DB.
exports.destroy = function(req, res) {
  UploadHandHistory.findById(req.params.id, function (err, uploadHandHistory) {
    if(err) { return handleError(res, err); }
    if(!uploadHandHistory) { return res.send(404); }
    uploadHandHistory.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}