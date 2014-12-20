/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var GetHand = require('./getHand.model');

exports.register = function(socket) {
  GetHand.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  GetHand.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('getHand:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('getHand:remove', doc);
}