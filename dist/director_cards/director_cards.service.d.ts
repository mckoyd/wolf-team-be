import { CreateDirectorCardDto } from './dto/create-director_card.dto';
import { DirectorCard } from '../schemas/Director_Card.schema';
import { Model } from 'mongoose';
export declare class DirectorCardsService {
    private readonly model;
    constructor(model: Model<DirectorCard>);
    create(createDirectorCardDto: CreateDirectorCardDto): Promise<import("mongoose").Document<unknown, {}, DirectorCard> & DirectorCard & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, DirectorCard> & DirectorCard & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: number): Promise<(import("mongoose").Document<unknown, {}, DirectorCard> & DirectorCard & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
