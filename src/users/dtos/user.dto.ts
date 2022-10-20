import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/interfaces/user.interface"

export class UserDto implements User {
    
    @ApiProperty()
    id: string

    @ApiProperty()
    name: string
    
    @ApiProperty()
    email: string
    
    @ApiProperty()
    password: string
    
}