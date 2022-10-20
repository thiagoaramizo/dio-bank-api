import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    
    constructor( @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
    }    
    
    setUser = async ( user: User ): Promise<UserEntity> => {
        user.id = uuidv4()
        return await this.userRepository.save(user)
    }

    getUser = async ( id: string): Promise<UserEntity> => {
        return await this.userRepository.createQueryBuilder('user').where('user.id = :id', {id: id}).getOne()
    }

    getUsers = async (): Promise<UserEntity[]> => {
        return await this.userRepository.find()
    }

}
