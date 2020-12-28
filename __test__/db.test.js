const services = require('../Service/index')
// beforeAll(() => {
//     const SequelizeMock = require("sequelize-mock");
//     const dbMock = new SequelizeMock();
//     const myData = dbMock.define("messages");
//     myData.$queueResult(
//         myData.build({
//             id: 5,
//             message: "world",
//             updatedAt: "2020-01-01 13:30:31",
//             createdAt: "2020-01-01 13:30:31",
//         }),
//     );
//     return myData;
// });

// test('Connect Database and Check length!!', async (done) => {
//     const message = await services.messageDb();
//     expect(message.id).toBe(5)
//     done()
// })

test('Check id = 1 message should be world!!', async (done) => {
    const response = await services.messageDbById(1);
    expect(response.message).toBe('World')
    done()
})