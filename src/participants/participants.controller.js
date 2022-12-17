const Participants = require('../models/participants.models')

const findParticipantConversations = async (userId, conversationId) => { 
  const data = await Participants.findOne({
    where: {
        userId,
        conversationId,
    }
  })
  return data 
}

module.exports = {
 findParticipantConversations
}