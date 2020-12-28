const express = require('express')
const app = express()
const port = 3000
const Service = require('./Service')

// app.use(express.json());

// for (let route of userRoutes.user) {
//   app.use(route.prefix, route.target);
// }

app.get('/', async (req, res) => {
    let worldMessage = await Service.messageDbById(1)
    let helloMessage = await Service.messageService()
    // console.log(helloMessage);
    res.send(helloMessage + worldMessage.message)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = app;