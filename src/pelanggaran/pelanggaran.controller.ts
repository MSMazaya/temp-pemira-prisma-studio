import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PelanggaranService } from './pelanggaran.service';
import { CreatePelanggaranDto } from './dto/create-pelanggaran.dto';
import { UpdatePelanggaranDto } from './dto/update-pelanggaran.dto';
import { Query } from '@nestjs/common';
import { FindManyPelanggaranDto } from './dto/find-many-pelanggaran.dto';
import { FindOnePelanggaranDto } from './dto/find-one-pelanggaran.dto';

@Controller('pelanggaran')
export class PelanggaranController {
  constructor(private readonly pelanggaranService: PelanggaranService) {}

  @Post()
  create(@Body() createPelanggaranDto: CreatePelanggaranDto) {
    return this.pelanggaranService.create(createPelanggaranDto);
  }

  @Get()
  findAll(@Query() query: FindManyPelanggaranDto) {
    return this.pelanggaranService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: FindOnePelanggaranDto) {
    return this.pelanggaranService.findOne(query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePelanggaranDto: UpdatePelanggaranDto,
  ) {
    return this.pelanggaranService.update(id, updatePelanggaranDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pelanggaranService.remove(id);
  }
}
