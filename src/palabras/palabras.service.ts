import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Palabras } from './schemas/palabrasSchema';
import { Model } from 'mongoose';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';

@Injectable()
export class PalabrasService {
  constructor(
    @InjectModel(Palabras.name) private palabrasModel: Model<Palabras>,
  ) {}

  async create(palabra: CreatePalabraDto) {
    const createdPalabra = new this.palabrasModel(palabra);
    return createdPalabra.save();
  }

  async update(id: string, palabra: UpdatePalabraDto) {
    return this.palabrasModel.findByIdAndUpdate(id, palabra).exec();
  }

  async findAll() {
    return this.palabrasModel.find().exec();
  }

  async findOne(id: string) {
    return this.palabrasModel.findById(id).exec();
  }

  async delete(id: string) {
    return this.palabrasModel.findByIdAndDelete(id).exec();
  }
}
