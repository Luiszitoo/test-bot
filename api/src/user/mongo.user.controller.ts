import mongoose from 'mongoose';
import UserController from './user.controller';
import UserModel from './user';
import { User } from './user';

class MongoUserController implements UserController {

    async connect() : Promise<void> {

        await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/testbot", {

            useNewUrlParser: true,
            useUnifiedTopology: true

        });

    }

    async findById(id : String) : Promise<User> {

        let document : any = await UserModel.findById(id);

        if (!document) {
            return Promise.resolve(null);
        }

        return Promise.resolve(new User(document._id, document.names));
    }

    async allUsers() : Promise<User[]> {

        let documents : any[] = await UserModel.find({});

        return Promise.resolve(documents.map(document => new User(document._id, document.names)));
    }

    async saveUser(user : User) : Promise<void> {

        let document = new UserModel({
            _id: user.id,
            names: user.names
        });

        await document.save();

        return Promise.resolve(undefined);
    }

}

export default MongoUserController;