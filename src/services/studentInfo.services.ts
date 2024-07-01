import { TcreateStudentInfo } from "../Interfaces/studentsInfo.interfaces"
import { prisma } from "../database/prisma"

export class studentInfo {
    async create(body: TcreateStudentInfo) {
        
            return await prisma.studentInfo.create({data: body});
        }
    }