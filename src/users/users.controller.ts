import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from 'src/database/user.entity';
import { User } from 'src/interfaces/user.interface';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    noUser(): string {
        return 'informe o ID para acessar'
    }

    @Get('/all')
    async getAllUsers(): Promise<UserEntity[]> {
        return await this.usersService.getUsers()
    }

    @Get('/:id')
    async getUser(@Param('id') id: string ): Promise<UserEntity> {
        return await this.usersService.getUser(id)
    }

    @Post()
    @ApiBody( { type: UserDto} )
    async postUser(@Body() user: UserDto): Promise<UserEntity> {
        return await this.usersService.setUser( user ) 
    }

}
