import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AchievementModule } from './achievement/achievement.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChallengeModule } from './challenge/challenge.module';
import { GameModule } from './game/game.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE ?? 'sqlite',
      host: process.env.DB_HOST ?? '',
      port: parseInt(`${process.env.DB_PORT || 3000}`, 10),
      username: process.env.DB_USER ?? 'rogue-user',
      password: process.env.DB_PASS ?? 'rogue-pass',
      database: process.env.DB_NAME ?? 'rogue-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production',
    } as any),
    AuthModule,
    UserModule,
    GameModule,
    ChallengeModule,
    AchievementModule,
    LeaderboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
