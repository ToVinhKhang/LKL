const { Mytest1 } = require('../../db/models/mytest1')

async function getName() {
    const person = await Mytest1.query().first();

    let firstName = person.first_name
    let lastName = person.last_name

    return {
        mess: `My name: ${firstName} ${lastName}`
    } 
}

module.exports = {
    getName,
};