import { ApiProperty } from '@nestjs/swagger';

export class Department {
  @ApiProperty({ example: 1, description: 'Código do deparmento' })
  id: number;

  @ApiProperty({ example: 'Financeiro', description: 'Nome do departamento' })
  name: string;
}
