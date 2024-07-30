import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{


    @ApiProperty({example: 'username@mail.ru',description:'e-mail'})
    readonly email: string;


    @ApiProperty({example: 'qwerty',description:'password'})
    readonly password: string;
}