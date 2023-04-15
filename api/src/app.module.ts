import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ContaModule } from './conta/conta.module';
import { DispesaModule } from './dispesa/dispesa.module';
@Module({
  imports: [UserModule, ContaModule, DispesaModule],
  providers: [PrismaService],
})
export class AppModule { }
