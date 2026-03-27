export default defineEventHandler(async () => {
    await connectToDatabase()
    return { ok: true, message: 'MongoDB connection OK' }
})