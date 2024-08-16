import { SuccessCardsService } from './success_cards.service';
import { CreateSuccessCardDto } from './dto/create-success_card.dto';
export declare class SuccessCardsController {
    private readonly successCardsService;
    constructor(successCardsService: SuccessCardsService);
    create(createSuccessCardDto: CreateSuccessCardDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Success_Card.schema").SuccessCard> & import("../schemas/Success_Card.schema").SuccessCard & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Success_Card.schema").SuccessCard> & import("../schemas/Success_Card.schema").SuccessCard & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Success_Card.schema").SuccessCard> & import("../schemas/Success_Card.schema").SuccessCard & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
