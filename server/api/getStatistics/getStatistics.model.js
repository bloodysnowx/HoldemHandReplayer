'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GetStatisticsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('GetStatistics', GetStatisticsSchema);