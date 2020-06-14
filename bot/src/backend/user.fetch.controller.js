const fetch = require('node-fetch');
const api = process.env.API_URL || "http://localhost:3000";

async function find(id) {

    return await fetch(`${api}/users/find/${id}`);

}

async function update(object) {

    return await fetch(`${api}/users/update/`, {

        method: "POST",
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }

    });

}

module.exports = {

    find: find,
    update: update

};