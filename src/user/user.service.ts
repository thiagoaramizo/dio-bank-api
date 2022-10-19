import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UserService {
  
    private users: User[] 

    constructor() {
        this.users = [
            {
                name: 'Thiago',
                email: 'email@mail.com',
                id: '7e1e0808-3fba-4831-926c-2bbcc8000f96'
            },
        ]
    }
    
    setUser = ( user: User ) => {
        user.id = uuidv4()
        this.users.push(user as User)
        console.log( this.users )
    }

    getUser = ( id: string): User => {
        return this.users.find( user => user.id === id )
    }

}
