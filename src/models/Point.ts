import { MinLength, Matches, IsNotEmpty, IsString } from "class-validator";

export class Point {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

}
