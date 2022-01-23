import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BerkasService } from './berkas.service';
import { CreateBerkasDto } from './dto/create-berkas.dto';
import { UpdateBerkasDto } from './dto/update-berkas.dto';
import { Query } from '@nestjs/common';
import { FindManyBerkasDto } from './dto/find-many-berkas.dto';
import { FindOneBerkasDto } from './dto/find-one-berkas.dto';

@Controller('berkas')
export class BerkasController {
  constructor(private readonly berkasService: BerkasService) {}

  @Post()
  create(@Body() createBerkasDto: CreateBerkasDto) {
    return this.berkasService.create(createBerkasDto);
  }

  @Get()
  findAll(@Query() query: FindManyBerkasDto) {
    return this.berkasService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: FindOneBerkasDto) {
    return this.berkasService.findOne(query);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBerkasDto: UpdateBerkasDto) {
    return this.berkasService.update(id, updateBerkasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.berkasService.remove(id);
  }
}
