function timeout(req, ms) {
  var interval;
  req.on('response', function() {
    clearInterval(interval);
  });
  setInterval(req.destroy, ms);
}

module.exports = timeout;