import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BotWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
