import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { url } from './prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaClient.name);

  public constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          url,
        },
      },
    })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}