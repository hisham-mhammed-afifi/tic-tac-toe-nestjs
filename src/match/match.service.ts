import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMatchDto } from './Dtos/create-match.dto';
import { Match, MatchDocument } from './match.schema';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>,
  ) {}

  async findAll(): Promise<Match[]> {
    return this.matchModel.find().exec();
  }

  async create(player: CreateMatchDto): Promise<Match> {
    const newMatch = new this.matchModel(player);
    return newMatch.save();
  }

  async update(id: string, secondPlayerId: string) {
    const match = await this.matchModel.findById(id).exec();
    if (!match) {
      throw new NotFoundException('Match not found.');
    }

    if (match.secondPlayerId) {
      throw new BadRequestException('Match full.');
    }

    Object.assign(match, {
      secondPlayerId,
      currentPlayerId: match.firstPlayerId,
    });
    return match.save();
  }
}
