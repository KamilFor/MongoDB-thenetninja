const moongoose = require('mongoose');

//ES6 Promises
moongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function(done) {
  // Connect to mongodb
  moongoose.connect('mongodb://localhost/testaroo');

  moongoose.connection
    .once('open', () => {
      console.log('Connection has been made, now make fireworks...');
      done();
    })
    .on('error', function(error) {
      console.log('Connection Error', error);
    });
});
