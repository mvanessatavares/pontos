import { IsLatitude, IsNotEmpty, IsString, MinLength, IsNumber} from "class-validator";
//import { IsName } from "class-validator";

export class PointRequest {

  @IsString()
  @IsNotEmpty()
  name: string;

  
  @IsNumber()
  @MinLength(15)
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @MinLength(15)
  @IsNotEmpty()
  longitude: number;

  @IsString()
  @IsNotEmpty()
  tipoLixo: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;
}
