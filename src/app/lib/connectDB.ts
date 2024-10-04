import prisma from '../../../prisma/client';

export async function connectDB() {
  try {
    await prisma.$connect();
  } catch (error) {
    throw new Error('Faild to connect!');
  }
}
