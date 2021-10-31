import { IsString } from 'class-validator';

export class CreateSessionDto {
  @IsString()
  public id: string;
}
