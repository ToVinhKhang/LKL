"use strict";

var bcrypt = require('bcryptjs');

function hashPassword(password) {
  return regeneratorRuntime.async(function hashPassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function checkPassword(password, dbpass) {
  return regeneratorRuntime.async(function checkPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(bcrypt.compare(password, dbpass));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function generateIndex(list, query) {
  for (var i = 0; i < list.length; i++) {
    var ele = list[i];
    ele.index = (query.page || 0) * (query.pageSize || 10) + (i + 1);
  }

  return list;
}

function depthRecursiveRelation(expr, depth) {
  return expr.replace('?', depth > 0 ? '.' + depthRecursiveRelation(expr, depth - 1) : '');
}

module.exports = {
  hashPassword: hashPassword,
  checkPassword: checkPassword,
  generateIndex: generateIndex,
  depthRecursiveRelation: depthRecursiveRelation
};