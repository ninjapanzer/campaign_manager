var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('campaigns', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: 'string',
    content: 'string',
    createdAt: 'timestamp',
    updatedAt: 'timestamp'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('campaigns', callback);
};
