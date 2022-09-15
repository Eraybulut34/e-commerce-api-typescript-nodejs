import { IsEmail, IsString, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsString()
  public product: string;
  @IsString()
  public user: string;
  @IsNumber()
  public quantity: number;

}
