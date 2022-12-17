const messageControllers = require('./messages.controllers')

const postMessage = (req, res) => {
    const userId = req.user.id
    const conversationId = req.params.conversation_id
    const {message} = req.body

   messageControllers.createMessage({userId, conversationId, message})
     .then(data => {
        res.status(201).json(data)
     })
     .catch(err => {
        res.status(400).json({message: err.message, fields: {
            message: 'string'
        }})
     })
}

const getAllMessages = (req, res) => {
  const conversationId = req.params.conversation_id

  messageControllers.findAllMessages(conversationId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getMessage = (req, res) => {
  const messageId = req.params.message_id

  messageControllers.findMessage(messageId)
     .then(data => {
       if(data){
        res.status(200).json(data)
       }else{
        res.status(404).json('Invalid ID')
       }
     })
     .catch(err => {
       res.status(400).json({message: err.message})
     })
}

const deleteOneMessage = (req, res) => {
  const messageId = req.params.message_id
 
  messageControllers.deleteMessage(messageId)
    .then(data => {
       res.status(204).json()
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  postMessage,
  getAllMessages,
  getMessage,
  deleteOneMessage
}