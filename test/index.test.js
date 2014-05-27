var http = require('http')
  , hyperquest = require('hyperquest')
  , timeout = require('..')
  , test = require('tap').test
;

test('hyperquest timesout', function(t) {
  var server = http.createServer(function(req, res) {
    if (/hang/.test(req.url))
      return; // hangs the server
    res.end('ok!');
  }).listen(5000);
  var req = hyperquest('http://localhost:5000/hang')
              .on('error', function() {
                server.close(function() {
                  setImmediate(process.exit);
                  t.end();
                });
              });
  timeout(req, 2000);
});

