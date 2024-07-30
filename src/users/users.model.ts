import { ApiProperty } from "@nestjs/swagger";
import {AutoIncrement, DataType, Model,Table,Column, AllowNull} from "sequelize-typescript";



interface UserCreationAttrs{
    email: string,
    password: string,

}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs >{


    @ApiProperty({example: '1',description:'id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;


    @ApiProperty({example: 'usermail@mail.ru',description:'e-mail'})
    @Column({type: DataType.STRING, unique:true, allowNull: false})
    email: string;

    @ApiProperty({example: 'qwerty',description:'Password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;


    @ApiProperty({example: 'true',description:'Banned/not banned'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;


    @ApiProperty({example: 'Нарушение правил',description:'Reason'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

}