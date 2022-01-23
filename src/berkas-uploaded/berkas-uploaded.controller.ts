import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BerkasUploadedService } from './berkas-uploaded.service';
import { CreateBerkasUploadedDto } from './dto/create-berkas-uploaded.dto';
import { UpdateBerkasUploadedDto } from './dto/update-berkas-uploaded.dto';
import { Query } from '@nestjs/common';
import { FindManyBerkasUploadedDto } from './dto/find-many-berkas-uploaded.dto';
import { FindOneBerkasUploadedDto } from './dto/find-one-berkas-uploaded.dto';

@Controller('berkas-uploaded')
export class BerkasUploadedController {
  constructor(private readonly berkasUploadedService: BerkasUploadedService) {}

  @Post()
  create(@Body() createBerkasUploadedDto: CreateBerkasUploadedDto) {
    return this.berkasUploadedService.create(createBerkasUploadedDto);
  }

  @Get()
  findAll(@Query() query: FindManyBerkasUploadedDto) {
    return this.berkasUploadedService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: FindOneBerkasUploadedDto) {
    return this.berkasUploadedService.findOne(query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBerkasUploadedDto: UpdateBerkasUploadedDto,
  ) {
    return this.berkasUploadedService.update(id, updateBerkasUploadedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.berkasUploadedService.remove(id);
  }
}
