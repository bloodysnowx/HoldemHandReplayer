/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var GetStatisticsList = require('./getStatisticsList.model');

exports.register = function(socket) {
  GetStatisticsList.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  GetStatisticsList.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('getStatisticsList:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('getStatisticsList:remove', doc);
}