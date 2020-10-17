"use strict";

var _require = require('../../db/models/notify'),
    Notify = _require.Notify;

var _require2 = require('uuid'),
    uuidv4 = _require2.v4;

function getNotify() {
  var notify;
  return regeneratorRuntime.async(function getNotify$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Notify.query());

        case 2:
          notify = _context.sent;
          return _context.abrupt("return", {
            notify: notify
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function postNotify(title, content) {
  var crrDate, notify;
  return regeneratorRuntime.async(function postNotify$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          crrDate = new Date();
          crrDateStr = crrDate.getDate() + '/' + (crrDate.getMonth() + 1) + '/' + crrDate.getFullYear();
          _context2.next = 4;
          return regeneratorRuntime.awrap(Notify.query().insert({
            id: uuidv4(),
            title: title,
            notification_content: content,
            post_date: crrDateStr
          }));

        case 4:
          notify = _context2.sent;
          return _context2.abrupt("return", notify);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  getNotify: getNotify,
  postNotify: postNotify
};