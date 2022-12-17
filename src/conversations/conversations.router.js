const router = require('express').Router()
const conversatioServices = require('./conversations.services')
const passportJWT = require('../middlewares/auth.middleware')
const messageServices = require('../messages/messages.services')
const participantValidate = require('../middlewares/participantValidate.middleware')


router.route('/')
      .get(passportJWT.authenticate('jwt', {session: false}), conversatioServices.getAllConversations)
      .post(passportJWT.authenticate('jwt', {session: false}), conversatioServices.generateConversation)

router.route('/:conversation_id')
      .get(passportJWT.authenticate('jwt', {session: false}), conversatioServices.getConversationById)
      .patch(passportJWT.authenticate('jwt', {session: false}), conversatioServices.patchConversation)
      .delete(passportJWT.authenticate('jwt', {session: false}), conversatioServices.deleteConversation)

router.route('/:conversation_id/messages')
      .get(passportJWT.authenticate('jwt', {session: false}), participantValidate, messageServices.getAllMessages)
      .post(passportJWT.authenticate('jwt', {session: false}), participantValidate,  messageServices.postMessage)

router.route('/:conversation_id/messages/:message_id')
      .get(passportJWT.authenticate('jwt', {session: false}), participantValidate, messageServices.getMessage)
      .delete(passportJWT.authenticate('jwt', {session: false}), participantValidate, messageServices.deleteOneMessage)


module.exports = router