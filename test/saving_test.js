const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving records', () => {
  // Create tests
  it('Saves a record to the database', function(done) {
    let char = new MarioChar({
      name: 'Mario',
    });

    // Save function is asyncronic
    char.save().then(function() {
      assert(char.isNew === false);
      done();
    });
  });
});
