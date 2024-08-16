export declare class DirectorCard {
    imageUrl: string;
    jobTitle: string;
    description: string;
    fullName: string;
}
export declare const DirectorCardSchema: import("mongoose").Schema<DirectorCard, import("mongoose").Model<DirectorCard, any, any, any, import("mongoose").Document<unknown, any, DirectorCard> & DirectorCard & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DirectorCard, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DirectorCard>> & import("mongoose").FlatRecord<DirectorCard> & {
    _id: import("mongoose").Types.ObjectId;
}>;
