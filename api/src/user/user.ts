import { Schema, model } from 'mongoose';

const UserSchema = new Schema({

    _id: String,
    names: Array

});

export default model('users', UserSchema);

export class User {

    public readonly id : String;
    public readonly names : String[];

    constructor(id : String, names?: String[]) {
        this.id = id;
        this.names = names || [];
    }

}