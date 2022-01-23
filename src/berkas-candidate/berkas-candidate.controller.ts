import { Query } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BerkasCandidateService } from './berkas-candidate.service';
import { CreateBerkasCandidateDto } from './dto/create-berkas-candidate.dto';
import { UpdateBerkasCandidateDto } from './dto/update-berkas-candidate.dto';
import { FindOneBerkasCandidateDto } from './dto/find-one-berkas-candidate.dto';
import { FindManyBerkasCandidateDto } from './dto/find-many-berkas-candidate.dto';

@Controller('berkas-candidate')
export class BerkasCandidateController {
  constructor(
    private readonly berkasCandidateService: BerkasCandidateService,
  ) {}

  @Post()
  create(@Body() createBerkasCandidateDto: CreateBerkasCandidateDto) {
    return this.berkasCandidateService.create(createBerkasCandidateDto);
  }

  @Get()
  findAll(@Query() query: FindManyBerkasCandidateDto) {
    return this.berkasCandidateService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: FindOneBerkasCandidateDto) {
    return this.berkasCandidateService.findOne(query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBerkasCandidateDto: UpdateBerkasCandidateDto,
  ) {
    return this.berkasCandidateService.update(id, updateBerkasCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.berkasCandidateService.remove(id);
  }
}
