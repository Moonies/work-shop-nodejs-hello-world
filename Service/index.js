const Gateways = require('../Gateway/')
const Sequelize = require("sequelize");
const db = require('../db')
const MessageWorld = require('../DB/models/message')(db, Sequelize)

const messageService = async () => {
    let response = await Gateways.getMessage()
    return response.data.message
}
const messageDb = async () => {
    return new Promise((resolve, reject) => {
        MessageWorld.findAll()
            .then((message) => {
                resolve(message);
            })
            .catch((err) => {
                console.log("error occurred", err);
                reject(err);
            });
    });
}

const messageDbById = async (id) => {
    return await MessageWorld.findOne({ where: { id: id } })
        .then((message) => {
            return message
        })
        .catch((err) => {
            console.log("error occurred", err);
            return err
        });
}
module.exports = { messageService, messageDb, messageDbById }