export declare class SuccessCard {
    imageUrl: string;
    jobTitle: string;
    fullName: string;
}
export declare const SuccessCardSchema: import("mongoose").Schema<SuccessCard, import("mongoose").Model<SuccessCard, any, any, any, import("mongoose").Document<unknown, any, SuccessCard> & SuccessCard & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SuccessCard, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SuccessCard>> & import("mongoose").FlatRecord<SuccessCard> & {
    _id: import("mongoose").Types.ObjectId;
}>;
