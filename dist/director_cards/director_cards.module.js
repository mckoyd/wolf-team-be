"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorCardsModule = void 0;
const common_1 = require("@nestjs/common");
const director_cards_service_1 = require("./director_cards.service");
const director_cards_controller_1 = require("./director_cards.controller");
const mongoose_1 = require("@nestjs/mongoose");
const Director_Card_schema_1 = require("../schemas/Director_Card.schema");
let DirectorCardsModule = class DirectorCardsModule {
};
exports.DirectorCardsModule = DirectorCardsModule;
exports.DirectorCardsModule = DirectorCardsModule = __decorate([
    (0, common_1.Module)({
        controllers: [director_cards_controller_1.DirectorCardsController],
        providers: [director_cards_service_1.DirectorCardsService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: Director_Card_schema_1.DirectorCard.name,
                    schema: Director_Card_schema_1.DirectorCardSchema,
                },
            ]),
        ],
    })
], DirectorCardsModule);
//# sourceMappingURL=director_cards.module.js.map