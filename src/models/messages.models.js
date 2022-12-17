const {DataTypes} = require('sequelize')
const Users= require('./users.models')
const Conversionts = require('./conversations.model')

const db = require('../utils/database')

const Messages = db.define('messages', {
    id: {
       type: DataTypes.UUID,
       primaryKey: true
    }, 
    userId: {
       type: DataTypes.UUID,
       allowNull: false,
       references: {
        key: 'id',
        model: Users
       }
    },  
    conversationId: {
       type: DataTypes.UUID,
       allowNull: false,
       references: {
         key: 'id',
         model: Conversionts
       }
    }, 
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
})

module.exports = Messages