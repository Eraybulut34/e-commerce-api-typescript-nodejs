import {IsString,IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public category: string;
  @IsString()
  public description: string;
  @IsString()
  public image: string;
  @IsNumber()
  public price: number;
  @IsString()
  public title: string;
}
