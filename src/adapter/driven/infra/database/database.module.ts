import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma.service";
import { ICategoriesRepository } from "src/@core/application/ports/icategory.repository";
import { PrismaCategoriesRepository } from "../repositories/prisma-categories-repository";

@Module({
    exports: [ICategoriesRepository],
    imports: [ConfigModule],
    providers: [
        PrismaService,
        {
            provide: ICategoriesRepository,
            useClass: PrismaCategoriesRepository
        }
    ]
})

export class DatabaseModule {}
