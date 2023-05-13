import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { Entry, EntryDocument } from './entities/entry.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EntriesService {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>,
  ) {}

  create(createEntryDto: CreateEntryDto) {
    const entry = new this.entryModel(createEntryDto);
    entry.amount = createEntryDto.amount;
    entry.userId = createEntryDto.userId;
    return entry.save();
  }

  findAll(userId: string) {
    return this.entryModel.find({ userId });
  }

  findOne(id: string) {
    return this.entryModel.findById(id);
  }

  update(id: string, updateEntryDto: UpdateEntryDto) {
    return this.entryModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          updateEntryDto,
        },
        {
          new: true,
        },
      )
      .exec();
  }

  remove(id: string) {
    return this.entryModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
