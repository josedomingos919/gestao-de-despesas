import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DispesaController } from './dispesa.controller';
import { DispesaService } from './dispesa.service';


@Module({
    controllers: [DispesaController],
    providers: [PrismaService, DispesaService],
})
export class DispesaModule { }
