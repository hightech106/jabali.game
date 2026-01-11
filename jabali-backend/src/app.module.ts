import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { typeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { KenoModule } from "./keno/keno.module";
import { BetsModule } from "./bets/bets.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
    }),
    AuthModule,
    UsersModule,
    BetsModule,
    KenoModule,
  ],
})
export class AppModule {}
