import { IsString } from 'class-validator';
export class createDepartmentDto {
  @IsString()
  readonly name: string;
}
