/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/getStatisticsList', require('./api/getStatisticsList'));
  app.use('/api/getStatistics', require('./api/getStatistics'));
  app.use('/api/getHand', require('./api/getHand'));
  app.use('/api/getHandList', require('./api/getHandList'));
  app.use('/api/uploadHandHistory', require('./api/uploadHandHistory'));
  app.use('/api/things', require('./api/thing'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
