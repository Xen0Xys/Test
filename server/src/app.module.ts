import {FilesModule} from "./modules/files/files.module";
import {UsersModule} from "./modules/users/users.module";
import * as redisStore from "cache-manager-redis-store";
import {AuthModule} from "./modules/auth/auth.module";
import {CronModule} from "./modules/cron/cron.module";
import {MailerModule} from "@nestjs-modules/mailer";
import {ThrottlerModule} from "@nestjs/throttler";
import {CacheModule} from "@nestjs/cache-manager";
import {ScheduleModule} from "@nestjs/schedule";
import type {RedisClientOptions} from "redis";
import {ConfigModule} from "@nestjs/config";
import {Module} from "@nestjs/common";
import * as dotenv from "dotenv";
import {AppController} from "./app.controller";

dotenv.config();

@Module({
    controllers: [AppController],
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        ScheduleModule.forRoot(),
        process.env.REDIS_URL === "" ? (() => {
            console.log("Using in-memory cache");
            return CacheModule.register({isGlobal: true});
        })() : (() => {
            console.log("Using Redis cache");
            return CacheModule.register<RedisClientOptions>({
                isGlobal: true,
                store: redisStore,
                url: process.env.REDIS_URL,
            });
        })(),
        ThrottlerModule.forRoot([{
            ttl: 60000,
            limit: 50,
        }]),
        MailerModule.forRoot({
            transport: {
                host: process.env.EMAIL_HOST,
                port: parseInt(process.env.EMAIL_PORT),
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                }
            },
        }),
        CronModule,
        UsersModule,
        AuthModule,
        FilesModule,
    ]
})
export class AppModule{}
