const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')
const Conversationts = require('./conversations.model')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //Users - Conversations 
    Users.hasMany(Conversationts)
    Conversationts.belongsTo(Users)
  
    // Users - Messages 
    Users.hasMany(Messages)
    Messages.belongsTo(Users)
    
    //Users - Participatns 
    Users.hasMany(Participants)
    Participants.belongsTo(Users)
    
    //Converstations - Messages 
    Conversationts.hasMany(Messages)
    Messages.belongsTo(Conversationts)
    
    //Converstations - Participants
    Conversationts.hasMany(Participants)
    Participants.belongsTo(Conversationts)

}

module.exports = initModels