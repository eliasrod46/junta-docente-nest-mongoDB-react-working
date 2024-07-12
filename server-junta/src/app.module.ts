import { Module } from '@nestjs/common';
import { UsersModule } from "./users/users.module";
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { BaseController } from './base/base.controller';
import { BaseService } from './base/base.service';


@Module({
  imports: [UsersModule, TasksModule, AuthModule],
  controllers: [BaseController],
  providers: [BaseService],
})
export class AppModule {}
