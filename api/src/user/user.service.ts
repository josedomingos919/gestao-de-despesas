import { Injectable } from '@nestjs/common';
import { AddUserDTO } from './dto/addUserDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto/updateUserDto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async add(data: AddUserDTO) {
    const user = await this.prisma.usuario.create({
      data,
    });

    return user;
  }

  async getAll() {
    const users = await this.prisma.usuario.findMany();

    return users;
  }

  async update(data: UpdateUserDTO) {
    const user = await this.prisma.usuario.update({
      where: {
        id: data.id,
      },
      data,
    });

    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.usuario.delete({
      where: {
        id,
      },
    });

    return user;
  }
}
