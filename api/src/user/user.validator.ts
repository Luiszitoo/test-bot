export default function validate(object : any) : boolean {

    if (!object) {
        return false;
    }

    let { _id, names } = object;

    if (!_id || !names) {
        return false;
    }

    return true;

}