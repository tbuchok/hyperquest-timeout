function timeout(req, ms) {
  var t = setTimeout(function() {
    req.destroy();
    req.emit('error', new Error('ETIMEDOUT: ' + ms + ' ms'));
  }, ms);
  req.on('response', function() { clearTimeout(t); });
  return req;
}

module.exports = timeout;