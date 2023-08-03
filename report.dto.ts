import { IsNumber, IsPositive, IsString, IsEmpty } from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsEmpty()
  source: string;
}
