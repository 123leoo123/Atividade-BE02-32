import { TCreateStudentBody } from "../Interfaces/students.interfaces"
import { prisma } from "../database/prisma"

export class StudentServices {
    async create(body: TCreateStudentBody){
        return await prisma.student.create({data: body})
    }
    async createMany(data: TCreateStudentBody[]){
        return await prisma.student.createMany({data})
    }

    async findOne(id: number){
        return await prisma.student.findFirst({ where: {id}, include: {studantInfo: true}})
    }

    async findMany(search?: string){
        return await prisma.student.findMany(
        { where: { name: { contains: search, mode: "insensitive"}}, 
        include: {studantInfo: true}});
    }
}