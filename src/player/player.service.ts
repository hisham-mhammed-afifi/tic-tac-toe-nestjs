import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './Dtos/create-player.dto';
import { Player, PlayerDocument } from './player.schema';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
  ) {}

  findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  findById(id: string): Promise<Player> {
    return this.playerModel.findById(id).exec();
  }

  async create(player: CreatePlayerDto): Promise<Player> {
    const newPlayer = new this.playerModel(player);
    return newPlayer.save();
  }

  async update(id: string, attrs: Partial<Player>) {
    const updatedPlayer = await this.playerModel.findById(id).exec();
    if (!updatedPlayer) {
      throw new NotFoundException('Player not found.');
    }

    Object.assign(updatedPlayer, attrs);
    return updatedPlayer.save();
  }

  async signup(name: string, email: string, password: string) {
    const isExist = await this.playerModel.findOne({ email }).exec();
    if (isExist) {
      throw new BadRequestException('Email already exist.');
    }

    password = await this.hashPassword(password);
    return this.create({ name, email, password });
  }

  async login(email: string, password: string) {
    const player = await this.playerModel.findOne({ email });
    if (!player) {
      throw new NotFoundException('player not found.');
    }

    if (!this.comparePassword(player.password, password)) {
      throw new BadRequestException('wrong password.');
    }

    return player;
  }

  async hashPassword(password: string) {
    const salt = randomBytes(8).toString('hex');
    const hashed = <Buffer>await scrypt(password, salt, 32);
    return salt + '.' + hashed.toString('hex');
  }

  async comparePassword(oldPassword: string, newPassword: string) {
    const [salt, storedHash] = oldPassword;
    const hash = <Buffer>await scrypt(newPassword, salt, 32);
    return storedHash === hash.toString('hex');
  }
}
