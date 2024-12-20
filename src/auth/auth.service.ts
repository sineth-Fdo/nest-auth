import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private UserModal:Model<User>) {}

    async signup(signupData: SignupDto) {

    }

}
