import mongoose from 'mongoose';

export async function connectToDatabase() {
  const config = useRuntimeConfig()
  const uri = config.mongodbUri

  if (!uri) {
    throw new Error('MONGODB_URI is not set')
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection
  }

  await mongoose.connect(uri)
  return mongoose.connection
}