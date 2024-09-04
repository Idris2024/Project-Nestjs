import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { users } from 'src/lib/db';
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken';
import {SignUpDto, SignInDto } from 'src/auth/dto/dto'
import User from 'src/entities/user.entity'

@Injectable()
export class AuthService {
    async signup(signupUserData: User) {
    const existingUser = users.find((u) => u.email === signupUserData.email )
        if (existingUser) {
            throw new HttpException('User Exists!', HttpStatus.BAD_REQUEST);
        }

        const saltRound = 10;
        const passwordHash = await hash(signupUserData.password as string, saltRound);
        signupUserData.passwordHash = passwordHash;
        signupUserData.password = undefined;

        users.push(signupUserData);
        return 'User was created successfully';
    
    }

    async signin(signinUserData: User) {
        const user = users.find((u) => u.email === signinUserData.email)
        const userPassword = signinUserData.password;
        const passwordHash = user.passwordHash;
        const isValid = await compare(userPassword as string, passwordHash);
        if (!isValid) {
            throw new HttpException('Password invalid', HttpStatus.UNAUTHORIZED);
        }

        const payload = {
            user: {
                id: user.id,
            }
        };

        const token = sign(payload, 'authsecret');
        return {token}
    }
}

