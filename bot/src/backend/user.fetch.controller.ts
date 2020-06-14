import fetch from 'node-fetch';
import { Response } from 'node-fetch';

const api = process.env.API_URL || "http://localhost:3000";

class Fetcher {
    
    async find(id : String) : Promise<Response> {
        return await fetch(`${api}/users/find/${id}`);
    }

    async update(user : any) : Promise<Response> {

        return await fetch(`${api}/users/update/`, {

            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }

        });

    }

}

export default new Fetcher();