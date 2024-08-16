"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessCardsModule = void 0;
const common_1 = require("@nestjs/common");
const success_cards_service_1 = require("./success_cards.service");
const success_cards_controller_1 = require("./success_cards.controller");
const mongoose_1 = require("@nestjs/mongoose");
const Success_Card_schema_1 = require("../schemas/Success_Card.schema");
let SuccessCardsModule = class SuccessCardsModule {
};
exports.SuccessCardsModule = SuccessCardsModule;
exports.SuccessCardsModule = SuccessCardsModule = __decorate([
    (0, common_1.Module)({
        controllers: [success_cards_controller_1.SuccessCardsController],
        providers: [success_cards_service_1.SuccessCardsService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: Success_Card_schema_1.SuccessCard.name,
                    schema: Success_Card_schema_1.SuccessCardSchema,
                },
            ]),
        ],
    })
], SuccessCardsModule);
//# sourceMappingURL=success_cards.module.js.map