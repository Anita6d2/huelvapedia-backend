import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { PalabrasService } from './palabras.service';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';

@Controller('palabras')
export class PalabrasController {
  constructor(private palabrasService: PalabrasService) {}

  @Post()
  async create(@Body(new ValidationPipe()) nuevaPalabra: CreatePalabraDto) {
    return this.palabrasService.create(nuevaPalabra);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) palabraActualizada: UpdatePalabraDto,
  ) {
    return this.palabrasService.update(id, palabraActualizada);
  }

  @Get()
  async findAll() {
    return this.palabrasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.palabrasService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.palabrasService.delete(id);
  }
}
