import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/nestjs-auth'),
      AuthModule],
})
export class AppModule {}
