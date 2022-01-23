import { BerkasService } from './berkas.service';
import { CreateBerkasDto } from './dto/create-berkas.dto';
import { UpdateBerkasDto } from './dto/update-berkas.dto';
import { FindManyBerkasDto } from './dto/find-many-berkas.dto';
import { FindOneBerkasDto } from './dto/find-one-berkas.dto';
export declare class BerkasController {
    private readonly berkasService;
    constructor(berkasService: BerkasService);
    create(createBerkasDto: CreateBerkasDto): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
    findAll(query: FindManyBerkasDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Berkas[]>;
    findOne(query: FindOneBerkasDto): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
    update(id: number, updateBerkasDto: UpdateBerkasDto): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
}
