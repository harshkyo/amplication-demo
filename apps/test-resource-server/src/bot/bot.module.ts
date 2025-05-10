import { Module } from "@nestjs/common";
import { BotService } from "./bot.service";
import { BotController } from "./bot.controller";
import { BotResolver } from "./bot.resolver";

@Module({
  controllers: [BotController],
  providers: [BotService, BotResolver],
  exports: [BotService],
})
export class BotModule {}
