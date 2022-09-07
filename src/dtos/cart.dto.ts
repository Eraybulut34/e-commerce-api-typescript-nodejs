import { IsEmail, IsString } from 'class-validator';

export class CreateCartDto {
 @IsString()
  public product: string;
  @IsString()
  public ;

}
