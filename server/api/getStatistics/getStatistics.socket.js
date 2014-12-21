/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var GetStatistics = require('./getStatistics.model');

exports.register = function(socket) {
  GetStatistics.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  GetStatistics.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('getStatistics:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('getStatistics:remove', doc);
}