var assert = require('assert');

// laika can do a lot more http://arunoda.github.io/laika/
suite('Default', function() {
    test('1 + 1 equals 2', function(done, server) {
        server.eval(function () {
            emit('addition', 1 + 1);
        })

        server.once('addition', function (res) {
            assert.equal(res, 2);
            done();
        });
    });
});