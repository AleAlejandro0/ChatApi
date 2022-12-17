const Messages = require('../models/messages.models')
const uuid = require('uuid')

const createMessage = async (obj) => {
   const data = await Messages.create({
     id: uuid.v4(),
     userId: obj.userId,
     conversationId: obj.conversationId,
     message: obj.message
   })
  return data 
}

const findAllMessages = async(conversationId) => {
  const data = await Messages.findAll({
     where: {
       conversationId
     }
  })
  return data 
}

const findMessage = async(id) => {
  const data = await Messages.findOne({
    where: {
      id
    }
  })
  return data 
}

const deleteMessage = async(id) => {
  const data = await Messages.destroy({
    where: {
      id
    }
  })
  return data 
}

module.exports = {
  createMessage,
  findAllMessages,
  findMessage,
  deleteMessage
}