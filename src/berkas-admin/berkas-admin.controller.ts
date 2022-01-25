import { Query } from "@nestjs/common";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BerkasAdminService } from "./berkas-admin.service";
import { CreateBerkasAdminDto } from "./dto/create-berkas-admin.dto";
import { UpdateBerkasAdminDto } from "./dto/update-berkas-admin.dto";
import { FindOneBerkasAdminDto } from "./dto/find-one-berkas-admin.dto";
import { FindManyBerkasAdminDto } from "./dto/find-many-berkas-admin.dto";

@Controller("berkas-admin")
export class BerkasAdminController {
  constructor(private readonly berkasAdminService: BerkasAdminService) {}

  @Post()
  create(@Body() createBerkasAdminDto: CreateBerkasAdminDto) {
    return this.berkasAdminService.create(createBerkasAdminDto);
  }

  @Get()
  findAll(@Query() query: FindManyBerkasAdminDto) {
    return this.berkasAdminService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.berkasAdminService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBerkasAdminDto: UpdateBerkasAdminDto
  ) {
    return this.berkasAdminService.update(id, updateBerkasAdminDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.berkasAdminService.remove(id);
  }
}
