"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDirectorCardDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_director_card_dto_1 = require("./create-director_card.dto");
class UpdateDirectorCardDto extends (0, mapped_types_1.PartialType)(create_director_card_dto_1.CreateDirectorCardDto) {
}
exports.UpdateDirectorCardDto = UpdateDirectorCardDto;
//# sourceMappingURL=update-director_card.dto.js.map