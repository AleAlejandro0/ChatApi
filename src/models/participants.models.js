const {DataTypes} = require('sequelize')
const Users = require('./users.models')
const Conversionts = require('./conversations.model')

const db = require('../utils/database')

const Participants = db.define('participants', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    conversationId: {
      type:  DataTypes.UUID,
      allowNull: false, 
      references: {
        key: 'id',
        model: Conversionts
      }
    }, 
    userId: {
       type: DataTypes.UUID,
       allowNull: false,
       references: {
         key: 'id',
         model: Users 
       }
    }
})

module.exports = Participants