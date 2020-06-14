const controller = require('./user.controller');
const { validate } = require('./user.validator');
let cache = {};

function get(id) {
    return cache[id];
}

async function getOrLoad(id) {

    let cached = get(id);

    if (cached) {
        return cached;
    }

    let found = await controller.findById(id);

    if (found) {
        update(found._id, found);
    }

    return found;

}

function update(object) {

    if (!validate(object)) {
        console.log(`Invalid User schema: ${object}`);
        return;
    }

    cache[object._id] = object;

}

module.exports = {

    getOrLoad: getOrLoad,
    update: update,
    get: get,
    values: cache

};