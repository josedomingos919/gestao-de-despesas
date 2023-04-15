import { Injectable } from '@nestjs/common';
import { AddContaDTO } from './dto/addContaDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateContaDTO } from './dto/updateContaDto';

@Injectable()
export class ContaService {
  constructor(private prisma: PrismaService) {}

  async add(data: AddContaDTO) {
    const conta = await this.prisma.conta.create({
      data,
    });

    return conta;
  }

  async getAll() {
    const contas = await this.prisma.conta.findMany();

    return contas;
  }

  async getByUser(userId: number) {
    let conta = await this.prisma.conta.findFirst({
      where: {
        usuarioId: userId,
      },
    });

    if (!conta?.id) {
      conta = await this.add({
        saldo: 0,
        usuarioId: userId,
      });
    }

    return conta;
  }

  async update(data: UpdateContaDTO) {
    const conta = await this.prisma.conta.update({
      where: {
        id: data.id,
      },
      data,
    });

    return conta;
  }

  async remove(id: number) {
    const conta = await this.prisma.conta.delete({
      where: {
        id,
      },
    });

    return conta;
  }
}
