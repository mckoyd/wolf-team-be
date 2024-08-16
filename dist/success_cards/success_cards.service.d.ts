import { CreateSuccessCardDto } from './dto/create-success_card.dto';
import { SuccessCard } from '../schemas/Success_Card.schema';
import { Model } from 'mongoose';
export declare class SuccessCardsService {
    private readonly model;
    constructor(model: Model<SuccessCard>);
    create(createSuccessCardDto: CreateSuccessCardDto): Promise<import("mongoose").Document<unknown, {}, SuccessCard> & SuccessCard & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, SuccessCard> & SuccessCard & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: number): Promise<(import("mongoose").Document<unknown, {}, SuccessCard> & SuccessCard & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
