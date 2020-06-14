function validate(object) {

    if (!object) {
        return false;
    }

    let { _id, names } = object;

    if (!_id || !names) {
        return false;
    }

    return true;

}

module.exports.validate = validate;