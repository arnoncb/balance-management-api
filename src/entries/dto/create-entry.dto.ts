import { IsNotEmpty } from 'class-validator';

export class CreateEntryDto {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  userId: string;

  description: string;
}
