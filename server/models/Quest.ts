import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const questSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        nodes: {
            type: [Schema.Types.Mixed],
            default: []
        },
        edges: {
            type: [Schema.Types.Mixed],
            default: []
        },
    }
)

export type Quest = InferSchemaType<typeof questSchema>

export const QuestModel: Model<Quest> =
    mongoose.models.Quest || mongoose.model<Quest>('Quest', questSchema)