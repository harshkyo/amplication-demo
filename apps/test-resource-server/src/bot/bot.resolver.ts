import * as graphql from "@nestjs/graphql";
import { BotService } from "./bot.service";

export class BotResolver {
  constructor(protected readonly service: BotService) {}
}
