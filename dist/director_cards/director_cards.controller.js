"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorCardsController = void 0;
const common_1 = require("@nestjs/common");
const director_cards_service_1 = require("./director_cards.service");
const create_director_card_dto_1 = require("./dto/create-director_card.dto");
let DirectorCardsController = class DirectorCardsController {
    constructor(directorCardsService) {
        this.directorCardsService = directorCardsService;
    }
    create(createDirectorCardDto) {
        return this.directorCardsService.create(createDirectorCardDto);
    }
    findAll() {
        return this.directorCardsService.findAll();
    }
    findOne(id) {
        return this.directorCardsService.findOne(+id);
    }
};
exports.DirectorCardsController = DirectorCardsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_director_card_dto_1.CreateDirectorCardDto]),
    __metadata("design:returntype", void 0)
], DirectorCardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirectorCardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectorCardsController.prototype, "findOne", null);
exports.DirectorCardsController = DirectorCardsController = __decorate([
    (0, common_1.Controller)('director-cards'),
    __metadata("design:paramtypes", [director_cards_service_1.DirectorCardsService])
], DirectorCardsController);
//# sourceMappingURL=director_cards.controller.js.map