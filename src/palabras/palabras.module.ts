import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Palabras, PalabrasSchema } from './schemas/palabrasSchema';
import { PalabrasService } from './palabras.service';
import { PalabrasController } from './palabras.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Palabras.name,
        schema: PalabrasSchema,
      },
    ]),
  ],
  providers: [PalabrasService],
  controllers: [PalabrasController],
})
export class PalabrasModule {}
