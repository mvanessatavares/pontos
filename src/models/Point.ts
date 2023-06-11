import { MinLength, Matches, IsNotEmpty, IsString } from "class-validator";

export class Point {
  @IsString()
  @IsNotEmpty()
  name: string;

}
