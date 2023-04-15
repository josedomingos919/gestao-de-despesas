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
import { AddContaDTO } from './dto/addContaDto';
import { ContaService } from './conta.service';
import { UpdateContaDTO } from './dto/updateContaDto';

@Controller('conta')
export class ContaController {
    constructor(private contaService: ContaService) { }

    @Post()
    add(@Body() data: AddContaDTO) {
        return this.contaService.add(data);
    }

    @Put()
    update(@Body() data: UpdateContaDTO) {
        return this.contaService.update(data);
    }

    @Get()
    getAll() {
        return this.contaService.getAll();
    }

    @Delete('/:id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.contaService.remove(id);
    }
}