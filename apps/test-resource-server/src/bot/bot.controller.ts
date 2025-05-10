import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BotService } from "./bot.service";

@swagger.ApiTags("bots")
@common.Controller("bots")
export class BotController {
  constructor(protected readonly service: BotService) {}
}
