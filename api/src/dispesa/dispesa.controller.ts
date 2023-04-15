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
import { AddDispesaDTO } from './dto/addDispesaDto';
import { DispesaService } from './dispesa.service';
import { UpdateDispesaDTO } from './dto/updateDispesaDto';

@Controller('dispesa')
export class DispesaController {
    constructor(private dispesaService: DispesaService) { }

    @Post()
    add(@Body() data: AddDispesaDTO) {
        return this.dispesaService.add(data);
    }

    @Put()
    update(@Body() data: UpdateDispesaDTO) {
        return this.dispesaService.update(data);
    }

    @Get()
    getAll() {
        return this.dispesaService.getAll();
    }

    @Delete('/:id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.dispesaService.remove(id);
    }
    @Get('/:id')
    getByUser(@Param('id', ParseIntPipe) id: number) {
        return this.dispesaService.getByUser(id);
    }
}