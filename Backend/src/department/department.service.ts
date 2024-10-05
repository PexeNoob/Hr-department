import { Injectable } from '@nestjs/common';
import { Department } from './entity/department.entity';
import { createDepartmentDto } from './dto/create-department.dto';

@Injectable()
export class DepartmentService {
  create(department: createDepartmentDto) {
    return { id: 10, name: department.name } as Department;
  }
}
