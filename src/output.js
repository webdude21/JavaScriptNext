"use strict";

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-polyfill");

function get(url) {
  var promise = new Promise(function (resolve, reject) {
    (0, _request2.default)({ method: 'GET', url: url, json: true }, function (err, resp, body) {
      if (err) {
        reject(err);
      } else {
        if (resp.statusCode !== 200) {
          reject(resp.statusCode);
        } else {
          resolve(body);
        }
      }
    });
  });

  return promise;
}

function printArticlesAndCategories() {
  var articles, categories;
  return regeneratorRuntime.async(function printArticlesAndCategories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(get('http://meanestblog.herokuapp.com/api/articles'));

        case 3:
          articles = _context.sent;

          articles.forEach(console.log);
          console.log("-----------------------------------------");
          _context.next = 8;
          return regeneratorRuntime.awrap(get('http://meanestblog.herokuapp.com/api/categofries'));

        case 8:
          categories = _context.sent;

          categories.forEach(console.log);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          throw new Error(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, [[0, 12]]);
}

// Error is not caught
try {
  var result = printArticlesAndCategories();
} catch (e) {
  console.log(e);
}

(function _callee() {
  var result;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(printArticlesAndCategories());

        case 3:
          result = _context2.sent;
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);

          console.log(_context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this, [[0, 6]]);
})();
