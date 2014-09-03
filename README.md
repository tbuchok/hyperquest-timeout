hyperquest-timeout
==================

Timeout hyperquests

## Why?

Killing a request after a set amount of time might be useful from time-to-time. This is an idea on how to do so with a hyperquest.

## Usage

```js
var hyperquest = require('hyperquest')
  , timeout = require('hyperquest-timeout')
;

var req = hyperquest('http://npmjs.org')
            .on('error', handleError)
            .pipe(WRITABLE_STREAM);
timeout(req, 2000);
```

Or you can pipe `timeout` as it returns the original `req`:

```js
var hyperquest = require('hyperquest')
  , timeout = require('hyperquest-timeout')
;

READABLE_STREAM
  .pipe(timeout(hyperquest('http://uploaderthingie.com', 1500)))
  .pipe(WRITABLE_STREAM)
;
```