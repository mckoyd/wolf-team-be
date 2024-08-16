import { DirectorCardsService } from './director_cards.service';
import { CreateDirectorCardDto } from './dto/create-director_card.dto';
export declare class DirectorCardsController {
    private readonly directorCardsService;
    constructor(directorCardsService: DirectorCardsService);
    create(createDirectorCardDto: CreateDirectorCardDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Director_Card.schema").DirectorCard> & import("../schemas/Director_Card.schema").DirectorCard & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Director_Card.schema").DirectorCard> & import("../schemas/Director_Card.schema").DirectorCard & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Director_Card.schema").DirectorCard> & import("../schemas/Director_Card.schema").DirectorCard & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
