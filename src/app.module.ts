import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { moviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, moviesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
