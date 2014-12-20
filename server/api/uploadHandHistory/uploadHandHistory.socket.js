/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var UploadHandHistory = require('./uploadHandHistory.model');

exports.register = function(socket) {
  UploadHandHistory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  UploadHandHistory.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('uploadHandHistory:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('uploadHandHistory:remove', doc);
}