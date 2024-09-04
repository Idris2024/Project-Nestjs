import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"
export class SignUpDto {

    @IsNumber()
    @IsNotEmpty()
    id:number

    @IsString()
    @IsNotEmpty()
    FirstName:string

    @IsString()
    @IsNotEmpty()
    LastName:string

    @IsEmail()
    @IsNotEmpty()
    Email:string

    @IsString()
    @IsNotEmpty()
    Password:string
}

export class SignInDto{
    @IsEmail()
    @IsNotEmpty()
    Email:string

    @IsString()
    @IsNotEmpty()
    Password:string
    
}