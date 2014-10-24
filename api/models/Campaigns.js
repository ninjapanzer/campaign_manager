/**
* Campaigns.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  migrate: 'safe',
  autoCreatedAt: true,
  autoUpdatedAt: true,
  autoPK: false,
  attributes: {
    name: { type: 'string' },
    content: { type: 'string' }
  }
};

