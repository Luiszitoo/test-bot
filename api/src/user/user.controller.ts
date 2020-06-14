import { User } from './user';

interface UserController {

    connect() : Promise<void>;

    findById(id : String) : Promise<User>;

    allUsers() : Promise<User[]>;

    saveUser(user : User) : Promise<void>;

}

export default UserController;