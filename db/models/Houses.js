'use strict';

const db = require('../index.js');

const addHouse = function(house, userId) {
  return db.query('SELECT id FROM Users WHERE id = ?', userId)
    .then(function(rows) {
      if (rows.length === 0) {
        throw 'Error: User not in database';
      } else {
        house.userId = userId;
        return db.query('INSERT INTO Houses SET ?', house);
      }
    });
};

module.exports.addHouse = addHouse;
