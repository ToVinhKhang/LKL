"use strict";

var express = require('express');

var router = express.Router();

var _require = require('./services'),
    getNotify = _require.getNotify,
    postNotify = _require.postNotify;

router.get("/", function _callee(req, res, ext) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = res;
          _context.next = 3;
          return regeneratorRuntime.awrap(getNotify());

        case 3:
          _context.t1 = _context.sent;

          _context.t0.send.call(_context.t0, _context.t1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/post", function _callee2(req, res, ext) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          _context2.t0 = res;
          _context2.next = 4;
          return regeneratorRuntime.awrap(postNotify(req.body.title, req.body.content));

        case 4:
          _context2.t1 = _context2.sent;

          _context2.t0.send.call(_context2.t0, _context2.t1);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;