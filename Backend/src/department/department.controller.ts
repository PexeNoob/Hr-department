import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createDepartmentDto } from 'src/department/dto/create-department.dto';
import { updateDepartmentDto } from 'src/department/dto/update-department.dto';
import { Department } from 'src/department/entity/department.entity';
import { DepartmentService } from './department.service';

@ApiBearerAuth()
@ApiTags('Department')
@Controller('Department')
export class DepartmentController {
  constructor(private readonly _departmentService: DepartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create Department' })
  @ApiResponse({})
  async create(
    @Body() createDepartmentDto: createDepartmentDto,
  ): Promise<Department> {
    return this._departmentService.create(createDepartmentDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one department' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Department,
  })
  async findOne(@Param('id') id: number): Promise<Department> {
    return null;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Department' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Department,
  })
  async update(
    @Param('id') id: number,
    @Body() updateDepartmentDto: updateDepartmentDto,
  ): Promise<Department> {
    return null;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Department' })
  @ApiResponse({
    status: 200,
    description: 'The record was delete',
    type: Department,
  })
  async delete(@Param('id') id: number) {
    return null;
  }
}
