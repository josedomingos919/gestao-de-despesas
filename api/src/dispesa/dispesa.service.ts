import { Injectable } from '@nestjs/common';
import { AddDispesaDTO } from './dto/addDispesaDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDispesaDTO } from './dto/updateDispesaDto';

@Injectable()
export class DispesaService {
    constructor(private prisma: PrismaService) { }

    async add(data: AddDispesaDTO) {
        const dispesa = await this.prisma.despesa.create({
            data: {
                data: new Date(data.data).toISOString(),
                descricao: data.descricao,
                total: data.total,
                usuarioId: data.usuarioId,
                tipo: data.tipo,
            },
        });

        return dispesa;
    }

    async getAll() {
        const dispesas = await this.prisma.despesa.findMany({
            include: {
                usuario: true
            }
        });

        return dispesas;
    }
    async getByUser(id: number) {
        const dispesa = await this.prisma.despesa.findFirst({
            where: {
                usuarioId: id
            }
        });

        return dispesa;
    }

    async update(data: UpdateDispesaDTO) {
        const dispesa = await this.prisma.despesa.update({
            where: {
                id: +data.id,
            },
            data: {
                data: new Date(data.data).toISOString(),
                descricao: data.descricao,
                total: data.total,
                tipo: data.tipo,
            },
        });

        return dispesa;
    }

    async remove(id: number) {
        const dispesa = await this.prisma.despesa.delete({
            where: {
                id,
            },
        });

        return dispesa;
    }

}
