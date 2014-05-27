function timeout(req, ms) {
  var t = setTimeout(function() {
    req.emit('error', new Error('ETIMEDOUT: ' + ms + ' ms'));
  }, ms);
  req.on('response', function() { clearTimeout(t); });
}

module.exports = timeout;