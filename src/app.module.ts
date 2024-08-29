import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { ChallengeModule } from './challenge/challenge.module';
import { AchievementModule } from './achievement/achievement.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

const ConfigDB = {
  type: process.env.DB_TYPE ?? 'sqlite',
  host: process.env.DB_HOST ?? '',
  port: parseInt(`${process.env.DB_PORT || 3000}`, 10),
  username: process.env.DB_USER ?? 'rogue-user',
  password: process.env.DB_PASS ?? 'rogue-pass',
  database: process.env.DB_NAME ?? 'rogue-db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
};

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigDB as any),
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
