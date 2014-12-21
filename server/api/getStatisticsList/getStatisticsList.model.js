'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GetStatisticsListSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('GetStatisticsList', GetStatisticsListSchema);