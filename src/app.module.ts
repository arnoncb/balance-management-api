import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EntriesModule } from './entries/entries.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://arnoncb:7wQlygwR1suZMrJF@mycluster.xdse8na.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    EntriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
