const express = require('express')
const router = express.Router()
const ClientController = require('../controllers/ClientController')

router.get('/', ClientController.showClients)

module.exports = router