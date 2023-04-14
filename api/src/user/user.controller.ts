import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AddUserDTO } from './dto/addUserDto';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/updateUserDto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  add(@Body() data: AddUserDTO) {
    return this.userService.add(data);
  }

  @Put()
  update(@Body() data: UpdateUserDTO) {
    return this.userService.update(data);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
