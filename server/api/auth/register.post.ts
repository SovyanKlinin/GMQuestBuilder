import bcrypt from 'bcrypt'
import { UserModel } from '~~/server/models/User'
import { connectToDatabase } from '#imports'

type RegisterBody = {
    name?: string
    email?: string
    password?: string
}

export default defineEventHandler(async (event) => {
    const body = await readBody<RegisterBody>(event)
    const name = body?.name?.trim()
    const email = body?.email?.trim().toLowerCase()
    const password = body?.password

    if (!name || !email || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Name, email and password are required'
        })
    }

    if (password.length < 8) {
        throw createError({
            status: 400,
            statusMessage: 'Password must be at least 8 characters'
        })
    }

    await connectToDatabase()

    const existingUser = await UserModel.findOne({email}).lean()
    if (existingUser) {
        throw createError({
            statusCode: 409,
            statusMessage: 'User with this email already exists'
        })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await UserModel.create({name, email, passwordHash})

    return {
        ok: true,
        user: {
            id: user._id.toString(),
            name: user.name,
            email: user.email
        }
    }
})