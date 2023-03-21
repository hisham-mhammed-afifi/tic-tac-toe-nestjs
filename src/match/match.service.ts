import { Injectable, NotFoundException, BadRequestException, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Match } from '../models/Match';
import { CreateMatchDto } from './Dtos/create-match.dto';

@Injectable()
export class MatchService {
  constructor(
    @Inject('MATCH_MODEL') private matchModel: Model<Match>,
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
