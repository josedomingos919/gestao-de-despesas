import { Module } from "@nestjs/common"
import { PrismaService } from 'src/prisma/prisma.service';
import { ContaController } from './conta.controller';
import { ContaService } from './conta.service';

@Module({
    controllers: [ContaController],
    providers: [PrismaService, ContaService],
})
export class ContaModule { };
