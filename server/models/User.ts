import mongoose, {Schema, type InferSchemaType, type Model } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        passwordHash: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export type User = InferSchemaType<typeof userSchema>

export const UserModel: Model<User> =
    mongoose.models.User || mongoose.model<User>('User', userSchema)