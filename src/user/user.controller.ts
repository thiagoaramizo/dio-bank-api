import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UserService } from './user.service'


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get()
    noUser(): string {
        return 'informe o ID para acessar'
    }

    @Get('/:id')
    getUser(@Param('id') id: string ): string {
        return JSON.stringify( this.userService.getUser(id) )
    }

    @Post()
    postUser(@Body() body): void {
        this.userService.setUser( body as User ) 
    }

}
