const uuid = require('uuid')
const Conversionts = require('../models/conversations.model')
const Participants = require('../models/participants.models')
const Users = require('../models/users.models')

const findAllConversations = async() => {
  const data = await Conversionts.findAll({
     include: {
         model: Participants,
         include: {
            model: Users
         }
     }
  })
  return data 
}

const findConversationById = async(id) => {
  const data = await Conversionts.findOne({
     where: {
       id 
     },
     include: {
        model: Participants,
        include: {
           model: Users
        }
     }
  })
  return data 
}

const createConversation = async (obj) => {
  const Conversation = await Conversionts.create({
    id: uuid.v4(),
    title: obj.title,
    imageUrl: obj.imageUrl,
    userId: obj.ownerId,
  })

  const participant1 = await Participants.create({
    id: uuid.v4(),
    userId: obj.ownerId,
    conversationId: Conversation.id
  })

  const participant2 = await Participants.create({
    id: uuid.v4(),
    userId: obj.participantId,
    conversationId: Conversation.id
  })
  return { 
    Conversation, 
    participant1, 
    participant2 }
}
  

const updateConversation = async (id, obj) => {
  const data = await Conversionts.update(obj, {
    where: {
      id
    }
  })
  return data[0]
}

const removeConversation = async (id) => {
  const data = await Conversionts.destroy({
    where: {
      id
    }
  })
  return data
 } 

module.exports = {
  findAllConversations,
  createConversation,
  findConversationById,
  updateConversation,
  removeConversation
}