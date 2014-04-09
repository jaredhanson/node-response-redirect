var vows = require('vows');
var assert = require('assert');
var util = require('util');
var redirect = require('response-redirect');


function MockResponse() {
  this._headers = {};
}

MockResponse.prototype.setHeader = function(name, value) {
  this._headers[name] = value;
}

MockResponse.prototype.end = function(data, encoding) {
  this._data = data;
}


vows.describe('redirect').addBatch({

  'should redirect' : function() {
    var res = new MockResponse();
    res.redirect = redirect;

    res.redirect('http://example.com');

    assert.equal(res.statusCode, 302);
    assert.equal(res._headers['Location'], 'http://example.com');
    assert.equal(res._headers['Content-Length'], '0');
  },

  'should redirect with status' : function() {
    var res = new MockResponse();
    res.redirect = redirect;

    res.redirect(301, 'http://example.com');

    assert.equal(res.statusCode, 301);
    assert.equal(res._headers['Location'], 'http://example.com');
    assert.equal(res._headers['Content-Length'], '0');
  },

  'should redirect with status' : function() {
    var res = new MockResponse();
    res.redirect = redirect;

    res.redirect('http://example.com', 301);

    assert.equal(res.statusCode, 301);
    assert.equal(res._headers['Location'], 'http://example.com');
    assert.equal(res._headers['Content-Length'], '0');
  }

}).export(module);
