import { IsNotEmpty, IsString, MinLength} from "class-validator";
import { IsNumber } from 'class-validator';

export class PointRequest {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @MinLength(8)
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsString()
  @IsNotEmpty()
  name: string;

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