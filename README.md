# response-redirect

  `response.redirect()` prototype method.

## Installation

    $ npm install response-redirect

## Integration

 To integrate in your app / framework extend the native response prototype or
 your own custom prototype if necessary:

```js
var http = require('http');
var redirect = require('response-redirect');

// #nodejsWTF?

http.ServerResponse.prototype.__defineGetter__('req', function(){
  return this.socket.parser.incoming;
});

// augment prototype

http.ServerResponse.prototype.redirect = redirect;
```

## API

```js
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');
```

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/node-response-redirect.png)](http://travis-ci.org/jaredhanson/node-response-redirect)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [TJ Holowaychuk](https://github.com/visionmedia)

## License

(The MIT License)

Copyright (c) 2012 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
