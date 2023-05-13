import { IsNotEmpty } from 'class-validator';

export class CreateEntryDto {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  type: string;

  description: string;
}
