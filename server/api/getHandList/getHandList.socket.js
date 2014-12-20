/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var GetHandList = require('./getHandList.model');

exports.register = function(socket) {
  GetHandList.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  GetHandList.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('getHandList:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('getHandList:remove', doc);
}