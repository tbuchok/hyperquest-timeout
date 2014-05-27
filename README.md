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