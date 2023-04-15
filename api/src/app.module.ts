import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ContaModule } from './conta/conta.module';
@Module({
  imports: [UserModule, ContaModule],
  providers: [PrismaService],
})
export class AppModule { }
