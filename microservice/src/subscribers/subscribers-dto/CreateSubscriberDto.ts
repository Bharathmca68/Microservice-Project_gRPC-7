import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator"


export class CreateSubscriberDto {

    @IsEmail()
    email: string

    @MinLength(3)
    @MaxLength(15)
    name: string;


}