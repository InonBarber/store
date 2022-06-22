import {Controller, Request, Get, Post, UseGuards, Body, UnauthorizedException} from '@nestjs/common';
import {AppService} from './app.service';
import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ReqHeader, User} from "./shared/decorators/user.decorator";
import {Public} from "./shared/decorators/public.decorator";

//import { LocalAuthGuard } from './auth/local-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private authService: AuthService) {
    }

    // LocalAuthGuard
    // @UseGuards()
    @Public()
    @Post('auth/login')
    async login(@Request() req, @Body() login: any) {
        let user = await this.authService.validateUser(login.emailAddress, login.password);
        if (!user) {
            throw new UnauthorizedException()
        }
        return user;
    }


    @Get('profile')
    getProfile(@User() user: any) {
        return {statusCode: 200};
    }


    // @Post()
    // async index(){
    //   return {}
    // }
}
