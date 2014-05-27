var http = require('http')
  , hyperquest = require('hyperquest')
  , timeout = require('..')
  , test = require('tap').test
;

var server = http.createServer(function(req, res) {
  if (/hang/.test(req.url))
    return; // hangs the server
  res.end('ok!');
})
.listen(5000);

test('hyperquest timesout', function(t) {
  var err = undefined;
  var req = hyperquest('http://localhost:5000/hang')
              .on('error', function(_err) { err = _err });
  timeout(req, 100);
  setTimeout(function() {
   t.ok(err, 'it should err');
   t.end();
  }, 150);
});
test('hyperquest does not timesout', function(t) {
  var err = undefined;
  var req = hyperquest('http://localhost:5000/sweet')
              .on('error', function(_err) { err = _err })
  timeout(req, 100);
  setTimeout(function() {
    t.notOk(err, 'it should not err');
    t.end();
    setImmediate(process.exit); // closing server is being annoying!
  }, 200);
});
