import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private UserModel:Model<User>) {}

    async signup(signupData: SignupDto) {

        const {email, name, password} = signupData;

        const emailInUse = await this.UserModel.findOne({email});

        if(emailInUse) {
            throw new BadRequestException('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await this.UserModel.create({
            email,
            name,
            password: hashedPassword
        });


    }

    async login(loginData: LoginDto) {
        const {email, password} = loginData;

        const user = await this.UserModel.findOne({email});

        if(!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return 'User logged in successfully';
    }

}
