import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import User from 'src/entities/user.entity'
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        //
    }

    @Post('/signup')
    async signup(@Body() userData: User)  {
        const message = await this.authService.signup(userData);
        return message;
    }

    @Post('/signin')
    async signin(@Body() usersData: User) {
        return await this.authService.signin(usersData);
    }

    
}
