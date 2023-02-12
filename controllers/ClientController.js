const Client = require('../models/Client')
const User = require('../models/User')

module.exports = class ClientController{
    static async showClients(req, res){
        res.render('clients/home')
    }
}