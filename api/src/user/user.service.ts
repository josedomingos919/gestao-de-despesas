import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddUserDTO } from './dto/addUserDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto/updateUserDto';
import { LoginDTO } from './dto/loginDto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async add(data: AddUserDTO) {
    const user = await this.prisma.usuario.create({
      data: {
        ...data,
        Conta: {
          create: [
            {
              saldo: 0,
            },
          ],
        },
      },
      include: {
        Conta: true,
        Despesa: true,
      },
    });

    return user;
  }

  async getAll() {
    const users = await this.prisma.usuario.findMany({
      include: {
        Conta: true,
        Despesa: true,
      },
    });

    return users;
  }

  async update(data: UpdateUserDTO) {
    data.id = +data?.id;

    const user = await this.prisma.usuario.update({
      where: {
        id: data.id,
      },
      data,
      include: {
        Conta: true,
        Despesa: true,
      },
    });

    return user;
  }

  async getOne(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
      include: {
        Conta: true,
        Despesa: true,
      },
    });

    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.usuario.delete({
      where: {
        id,
      },
      include: {
        Conta: true,
        Despesa: true,
      },
    });

    return user;
  }

  async login(data: LoginDTO) {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: data.email,
        senha: data.password,
      },
      include: {
        Conta: true,
        Despesa: true,
      },
    });

    if (user) return user;
    else
      throw new ForbiddenException({
        error: 'user not found',
      });
  }
}
