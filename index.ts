import { prisma } from './lib/prisma'

export async function getUser(){
    const users = await prisma.user.findMany()
    return users
}