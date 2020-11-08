const bcypt = require('bcryptjs');


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: bcypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'janeeee@example.com',
        password: bcypt.hashSync('123456', 10),
    }
]

module.exports = users;